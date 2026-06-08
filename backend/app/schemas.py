from pydantic import BaseModel, EmailStr


class SignupRequest(BaseModel):
    name: str
    email: EmailStr
    password: str
    confirm_password: str

# from pydantic import BaseModel

class LoginRequest(BaseModel):
    email: str
    password: str