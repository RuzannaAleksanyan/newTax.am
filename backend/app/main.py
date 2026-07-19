from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

from sqlalchemy.orm import Session

from app.database import (
    SessionLocal,
    engine,
    Base
)

from app.models import (
    User,
    Company
)

from app.schemas import (
    SignupRequest,
    LoginRequest,
    CompanyCreate
)

from app.security import (
    hash_password,
    verify_password
)

from app.auth import (
    decode_token,
    create_access_token
)

# DATABASE
Base.metadata.create_all(
    bind=engine
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],

    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

security = HTTPBearer()

def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()

# SIGNUP
@app.post("/signup")
def signup(
    user: SignupRequest,
    db: Session = Depends(get_db)
):
    if user.password != user.confirm_password:
        raise HTTPException(
            status_code=400,
            detail="Գաղտնաբառերը չեն համընկնում"
        )

    existing_user = db.query(User)\
        .filter(
            User.email == user.email
        )\
        .first()
    
    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Այս email-ը արդեն օգտագործված է"
        )

    hashed_pw = hash_password(
        user.password
    )

    new_user = User(
        name=user.name,
        email=user.email,
        password=hashed_pw
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message":"User registered successfully"
    }

# LOGIN
@app.post("/login")
def login(
    user: LoginRequest,
    db: Session = Depends(get_db)
):
    db_user = db.query(User)\
        .filter(
            User.email == user.email
        )\
        .first()

    if not db_user:
        raise HTTPException(
            status_code=400,
            detail="User not found"
        )

    if not verify_password(
        user.password,
        db_user.password
    ):
        raise HTTPException(
            status_code=400,
            detail="Սխալ գաղտնաբառ"
        )

    token = create_access_token(
        {
            "user_id":db_user.id
        }
    )

    return {
        "access_token":token,
        "token_type":"bearer"
    }


# AUTH

# def get_current_user(

#     credentials:
#     HTTPAuthorizationCredentials = Depends(security),

#     db: Session = Depends(get_db)

# ):


#     token = credentials.credentials


#     payload = decode_token(token)



#     if not payload:

#         raise HTTPException(
#             status_code=401,
#             detail="Invalid token"
#         )



#     user_id = payload.get(
#         "user_id"
#     )



#     user = db.query(User)\
#         .filter(
#             User.id == user_id
#         )\
#         .first()



#     if not user:

#         raise HTTPException(
#             status_code=401,
#             detail="User not found"
#         )

#     return user
def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):
    print("=== AUTH CHECK ===")

    token = credentials.credentials

    print("TOKEN:", token)

    payload = decode_token(token)

    print("PAYLOAD:", payload)

    if not payload:
        print("TOKEN INVALID")
        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )
    
    user_id = payload.get("user_id")

    print("USER ID:", user_id)

    user = db.query(User).filter(
        User.id == user_id
    ).first()

    print("FOUND USER:", user)

    if not user:
        raise HTTPException(
            status_code=401,
            detail="User not found"
        )
    return user

# DASHBOARD
@app.get("/dashboard")
def dashboard(
    current_user:
    User = Depends(get_current_user)
):
    return {
        "id":current_user.id,
        "name":current_user.name,
        "email":current_user.email
    }

# CREATE COMPANY
@app.post("/company")
def create_company(
    company: CompanyCreate,
    current_user:
    User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    new_company = Company(
        user_id=current_user.id,
        **company.dict()
    )
    db.add(new_company)
    db.commit()
    db.refresh(new_company)

    return {
        "message":"Company created",
        "company_id":new_company.id
    }

# GET COMPANY
@app.get("/company/me")
def get_company(
    current_user:
    User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    company = db.query(Company)\
        .filter(
            Company.user_id == current_user.id
        )\
        .first()

    if not company:
        raise HTTPException(
            status_code=404,
            detail="Company not found"
        )
    return company

# CHECK COMPANY
@app.get("/company/check")
def check_company(
    current_user:
    User = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    company = db.query(Company)\
        .filter(
            Company.user_id == current_user.id
        )\
        .first()

    return {
        "has_company":
        company is not None
    }