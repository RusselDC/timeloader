from fastapi import APIRouter , HTTPException
from typing import Optional
from api.controller.UserController import AuthUserControllerDep
from api.types.UserTypes import UserRegistrationData

trainee = APIRouter(prefix="/trainee", tags=["trainee"])


@trainee.post("/register")
def create_page(controller: AuthUserControllerDep, data: UserRegistrationData):
    try:
        return controller.register_user(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    