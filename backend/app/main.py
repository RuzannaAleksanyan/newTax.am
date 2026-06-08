# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel, EmailStr

# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# fake_db = []

# class SignupRequest(BaseModel):
#     name: str
#     email: EmailStr
#     password: str
#     confirm_password: str


# @app.post("/signup")
# def signup(user: SignupRequest):
#     print(user.dict())
#     if user.password != user.confirm_password:
#         raise HTTPException(status_code=400, detail="Գաղտնաբառերը չեն համընկնում")

#     for u in fake_db:
#         if u["email"] == user.email:
#             raise HTTPException(status_code=400, detail="Այս email-ը արդեն օգտագործված է")

#     fake_db.append({
#         "name": user.name,
#         "email": user.email,
#         "password": user.password
#     })

#     return {"message": "User registered successfully"}



from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app.database import SessionLocal, engine
from app.models import User
from app.schemas import SignupRequest
from app.database import Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@app.post("/signup")
def signup(user: SignupRequest, db: Session = Depends(get_db)):

    if user.password != user.confirm_password:
        raise HTTPException(
            status_code=400,
            detail="Գաղտնաբառերը չեն համընկնում"
        )

    existing_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Այս email-ը արդեն օգտագործված է"
        )

    new_user = User(
        name=user.name,
        email=user.email,
        password=user.password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User registered successfully"
    }