from fastapi import APIRouter, HTTPException, Depends, Header, Request
from fastapi import Request as FastAPIRequest
from api.middleware.AuthMiddleWare import require_bearer_token
from api.controller.UserController import UserControllerDep
from api.types.UserTypes import UserLoginData
from core.dep import AuthToken

user = APIRouter(prefix="/user", tags=["user"])


@user.post("/login")
def create_page(
    controller: UserControllerDep,
    data: UserLoginData,
):
    try:
        # deps holds header info if needed
        return controller.login_user(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@user.get("/verify-token")
def verify_token(controller: UserControllerDep, auth: AuthToken):
    try:
        return controller.verify_token(auth)
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))