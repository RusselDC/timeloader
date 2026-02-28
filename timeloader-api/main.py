from fastapi import FastAPI
from core.config import settings

# import the router defined under ``api/``; it contains all of the
# application-specific endpoints.  by keeping the router here we avoid any
# circular import: the submodules never import ``app`` back from this file.
from api.main import api_router

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.VERSION,
    debug=True,
)

# Mount the API router at a versioned base path.  ``prefix`` passed to
# ``FastAPI`` itself only affects the OpenAPI document’s ``servers`` metadata
# and does **not** automatically prepend to all routes, which is why we
# include the router here rather than rely on the application-level prefix.
app.include_router(api_router, prefix=f"/api/{settings.VERSION}")

