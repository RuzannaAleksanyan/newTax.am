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

class CompanyCreate(BaseModel):

    business_name: str

    legal_form: str

    tax_id: str

    registration_number: str

    registration_date: str

    business_activity: str

    country: str

    city: str

    legal_address: str