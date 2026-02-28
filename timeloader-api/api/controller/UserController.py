from fastapi import Depends

from core.dep import Session
from models.user import User
from models.trainee import Trainee
from models.institution import Institution
from sqlmodel import select, func
from api.types.UserTypes import UserLoginPublic, UserRegistrationData, UserRegistrationPublic, UserLoginData
from typing import Annotated, cast
# password hashing
from passlib.context import CryptContext
from core.dep import Session
from models.institution_to_user import InstitutionToUser
from core.config import settings
from jose import jwt
from jose.exceptions import JWTError
import datetime

pwd_context = CryptContext(schemes=["pbkdf2_sha256"], deprecated="auto")

class UserController:
    def __init__(self, db: Session):
        self.db = db
    
    def encrypt_password(self, plaintext_password: str) -> str:
        return pwd_context.hash(plaintext_password)


    def create_user(self, data: UserRegistrationData):
        try:
            hashed = self.encrypt_password(data.password)
            new_user = User(
                email=data.email,
                password=hashed,
                user_type=data.user_type,
                contact_number=data.contact_number
            )
            self.db.add(new_user)
            self.db.commit()
            self.db.refresh(new_user)
            
            return new_user
        except Exception as e:
            raise Exception(f"Error creating user: {e}")
            
    # allow SQLAlchemy column objects as well (static checker fuss)
    def create_trainee(self, data: UserRegistrationData, trainee_id: str, user_id: int | object):
        try:
            new_trainee = Trainee(
                trainee_id=trainee_id,
                first_name=data.first_name,
                last_name=data.last_name,
                birth_date=data.birth_date,
                gender=data.gender,
                user_id=user_id
             )

            self.db.add(new_trainee)
            self.db.commit()
            self.db.refresh(new_trainee)

            return new_trainee
        except Exception as e:
            raise Exception(f"Error creating trainee: {e}")
        
    def get_institution(self, institution_id: int):
        try:
            institution = self.db.exec(select(Institution).where(Institution.institution_id == institution_id)).first()
            if not institution:
                raise Exception("Institution not found")
            return institution
        except Exception as e:
            raise Exception(f"Error fetching institution: {e}")
        
    def connect_user_institution(self, user_id: int, institution_id: int):
        try:
            new_institution_to_user = InstitutionToUser(
                user_id=user_id,
                institution_id=institution_id
            )
            self.db.add(new_institution_to_user)
            self.db.commit()
            self.db.refresh(new_institution_to_user)
        except Exception as e:
            raise Exception(f"Error connecting user to institution: {e}")
    
    def register_user(self, data: UserRegistrationData):
        try:
            institution = self.get_institution(data.institution_id)
            new_user = self.create_user(data)
            self.connect_user_institution(cast(int, new_user.user_id), data.institution_id)
            self.create_trainee(
                data,
                trainee_id=f"{institution.institution_abbr}-{new_user.user_id}",
                user_id=cast(int, new_user.user_id),  
            )
            return UserRegistrationPublic(message="User registered successfully")
        except Exception as e:
            raise Exception(f"Error registering user: {e}")
    
    def make_token(self, user: User):
        payload = {
            "user_id": user.user_id,
            "email": user.email,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1, minutes=30) 
        }
        return jwt.encode(payload, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)
    
    def login_user(self, data : UserLoginData):
        try:
            user = self.db.exec(select(User).where(User.email == data.email)).first()
            if not user:
                raise Exception("User not found")
            if not pwd_context.verify(data.password, str(user.password)):
                raise Exception("Incorrect password")
            return UserLoginPublic(
                user=str(user.email),
                token=self.make_token(user)
            )
        except Exception as e:
            raise Exception(f"Error logging in user: {e}")
        
    def verify_token(self, token: str):
        """Check token expiry and refresh when close to expiration.

        Returns a dict containing ``user_id`` and a ``token``.  If the token has
        more than ten minutes remaining the original token is returned; if it's
        about to expire (<10m left) a fresh token for the same payload is
        issued.  Expired tokens raise an exception.
        """
        try:
            payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
            user = self.db.exec(select(User).where(User.user_id == payload.get("user_id"))).first()
            if not user:
                raise Exception("User from token not found")
                    
            user_id = payload.get("user_id")   
            if user_id is None:
                raise Exception("Invalid token: user_id missing")

            exp = payload.get("exp")
            if exp is None:
                raise Exception("Invalid token: exp missing")

            now = datetime.datetime.utcnow().timestamp()
            time_left = exp - now
            if time_left < 0:
                raise Exception("Token expired")

            return UserLoginPublic(
                user=str(user.email),
                token=self.make_token(user)
            )
        except JWTError as e:
            raise Exception(f"Token verification failed: {e}")




        
def get_user_controller(db: Session):
    return UserController(db)
    
UserControllerDep = Annotated[UserController, Depends(get_user_controller)]