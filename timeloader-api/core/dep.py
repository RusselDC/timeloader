from core.config import settings
from sqlmodel import create_engine, Session as DbSessionType
from typing import Annotated, Generator
from fastapi import Depends
from fastapi import HTTPException, Request, Header

db_engine = create_engine(settings.DATABASE_URL, echo=True)

def get_session():
    with DbSessionType(db_engine) as session:
        yield session




async def require_bearer_token(
    request: Request,
    authorization: str | None = Header(None),
):
    # simple check, same as middleware
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Unauthorized")
    token = authorization.split(" ", 1)[1]
    return token  



Session =  Annotated[DbSessionType, Depends(get_session)]
AuthToken = Annotated[str, Depends(require_bearer_token)]