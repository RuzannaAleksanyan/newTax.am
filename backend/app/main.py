from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

fake_db = []

class SignupRequest(BaseModel):
    name: str
    email: EmailStr
    password: str
    confirm_password: str


@app.post("/signup")
def signup(user: SignupRequest):
    print(user.dict())
    if user.password != user.confirm_password:
        raise HTTPException(status_code=400, detail="Գաղտնաբառերը չեն համընկնում")

    for u in fake_db:
        if u["email"] == user.email:
            raise HTTPException(status_code=400, detail="Այս email-ը արդեն օգտագործված է")

    fake_db.append({
        "name": user.name,
        "email": user.email,
        "password": user.password
    })

    return {"message": "User registered successfully"}

