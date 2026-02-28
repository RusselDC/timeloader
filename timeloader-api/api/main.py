from fastapi import APIRouter

from api.routes.page import page
from api.routes.institution import institution
from api.routes.trainee import trainee
from api.routes.user import user

api_router = APIRouter()


api_router.include_router(page)
api_router.include_router(institution)
api_router.include_router(trainee)
api_router.include_router(user)
