# ``api.main`` should *not* import the application instance. doing so
# creates a circular import: the root ``main`` needs to import this module to
# register routers, and this module would import the root back again.
#
# Instead we expose an ``APIRouter`` here and let the application include it
# from the top level.  the router can in turn include any sub-routers (e.g.
# ``page``) to keep the namespace tidy.
from fastapi import APIRouter

from api.routes.page import page
from api.routes.institution import institution
from api.routes.trainee import trainee
from api.routes.user import user
# top-level router for the ``/pages`` endpoints (and others that may be added
# under ``api/`` in future).  the root application will include this router
# with whatever prefix it wants (versioning, etc.).
api_router = APIRouter()

# sub-routers are mounted here; the order doesn't matter much.
api_router.include_router(page)
api_router.include_router(institution)
api_router.include_router(trainee)
api_router.include_router(user)
# If you ever need to expose additional routers, just import and include them
# above.  Do **not** import ``app`` from the root module; that import is the
# source of the circular dependency you were experiencing.
