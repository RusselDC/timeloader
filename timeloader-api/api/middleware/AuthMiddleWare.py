from fastapi import HTTPException, Request, Header


async def require_bearer_token(
    request: Request,
    authorization: str | None = Header(None),
):
    # simple check, same as middleware
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Unauthorized")
    token = authorization.split(" ", 1)[1]
    return token  

