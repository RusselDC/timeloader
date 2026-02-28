from sqlmodel import SQLModel
from models.user import UserType
from datetime import date


class UserRegistrationData(SQLModel):
    # user table
    email: str
    password: str
    # type annotation required by Pydantic; default to USER
    user_type: UserType = UserType.USER
    contact_number: str | None = None

    # institution
    institution_id: int

    trainee_id: str
    first_name: str
    last_name: str
    # birth_date must be a valid ISO date (YYYY-MM-DD)
    birth_date: date
    gender: str
    
    
class UserRegistrationPublic(SQLModel):
    message: str

class UserLoginData(SQLModel):
    email: str
    password: str
    
class UserLoginPublic(SQLModel):
    user: str
    token: str


class TokenVerifyResponse(SQLModel):
    user_id: int
    token: str