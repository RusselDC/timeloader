from fastapi import FastAPI
from core.config import settings

from api.main import api_router

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.VERSION,
    debug=True,
)


app.include_router(api_router, prefix=f"/api/{settings.VERSION}")

