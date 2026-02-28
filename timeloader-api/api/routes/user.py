from fastapi import APIRouter, HTTPException, Depends, Header, Request
from fastapi import Request as FastAPIRequest
from api.controller.UserController import UserControllerDep
from api.types.UserTypes import UserLoginData
from core.dep import AuthToken
from api.service.jwt import JWTServiceDep

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
def verify_token(auth: AuthToken, jwt_service: JWTServiceDep):
    try:
        return jwt_service.verify_token(auth)
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))