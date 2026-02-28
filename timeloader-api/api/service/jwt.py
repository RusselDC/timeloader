from typing import Annotated

from fastapi.params import Depends

from core.dep import Session
from sqlalchemy import select
from models.user import User
from api.types.UserTypes import TokenVerifyResponse, UserLoginPublic
from core.config import settings
from jose import jwt
from datetime import datetime, timedelta
from jose.exceptions import JWTError

class JWTService:
    def __init__(self, db: Session):
        self.db = db
        

    def _decode_payload(self, token: str):
        try:
            return jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
        except JWTError as e:
            raise Exception(f"Token verification failed: {e}")

    def _get_user(self, user_id: int) -> User:
        user = self.db.exec(
            select(User).where(User.user_id == user_id) # type: ignore
        ).scalars().first() # type: ignore
        if not user:
            raise Exception("User from token not found")
        return user


    def _assert_user_id(self, payload: dict) -> int:
        if not isinstance(payload, dict):
            raise Exception(f"Unexpected payload type {type(payload)}: {payload}")
        user_id = payload.get("user_id")
        if user_id is None:
            raise Exception("Invalid token: user_id missing")
        return user_id

    def _assert_exp(self, payload: dict) -> float:
        if not isinstance(payload, dict):
            raise Exception(f"Unexpected payload type {type(payload)}: {payload}")
        exp = payload.get("exp")
        if exp is None:
            raise Exception("Invalid token: exp missing")
        now = datetime.utcnow().timestamp()
        if exp - now < 0:
            raise Exception("Token expired")
        return exp
    
    def make_token(self, user: User):
        payload = {
            "user_id": user.user_id,
            "email": user.email,
            "exp": datetime.utcnow() + timedelta(hours=1, minutes=30) 
        }
        new_token = jwt.encode(payload, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)
        print(new_token)
        test_token = self._decode_payload(new_token)
        print(test_token)
        return new_token

    def verify_token(self, token: str):
        # provide detailed diagnostics if verification fails
        try:
            payload = self._decode_payload(token)
            print(f"decoded payload ({type(payload)}): {payload}")
            user_id = self._assert_user_id(payload)
            user = self._get_user(user_id)

            exp = payload.get("exp")
            now = datetime.utcnow().timestamp()
            time_left = exp - now if exp is not None else None
            print(f"verify_token diagnostics: user_id={user_id}, exp={exp}, time_left={time_left}")

            self._assert_exp(payload)
            new_token = self.make_token(user)
            return TokenVerifyResponse(
                user_id=user_id,
                token=new_token
            )
        except Exception as e:
            import traceback
            print("verify_token error:", type(e).__name__, e)
            print(traceback.format_exc())
            raise

def get_jwt_service(db: Session):
    return JWTService(db)

JWTServiceDep = Annotated[JWTService, Depends(get_jwt_service)]

