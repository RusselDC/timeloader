from fastapi import APIRouter , HTTPException
from typing import Optional
from api.controller.PageController import PageControllerDep

page = APIRouter(prefix="/pages", tags=["pages"])

@page.get("/")
def read_pages(controller: PageControllerDep, page: Optional[str] = None):
    try:
        return controller.read_pages(page=page)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@page.get("/create/{page_name}")
def create_page(page_name: str, controller: PageControllerDep):
    try:
        return controller.create_page(page_name)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    