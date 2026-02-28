from fastapi import Depends
from typing import Annotated
from core.dep import Session
from models.page import Page
from sqlmodel import select, func
from api.types.PageTypes import PagePublic, PageCreatePublic
from datetime import datetime
from typing import Optional



class PageController:
    def __init__(self, db: Session):
        self.db = db
        
    def read_pages(self,page: Optional[str] = None):
        try:
            start_time = datetime.now()
            base_statement = select(Page)
            if page:
                base_statement = base_statement.where(Page.page_name == page)
                
            data_statment = self.db.exec(base_statement).fetchall()
            count_statment = self.db.exec(
                select(func.count()).select_from(base_statement.subquery())
            ).one()
            end_time = datetime.now()
            return PagePublic(
                data=data_statment,
                count=count_statment,
                time=str(end_time - start_time),
            )
        except Exception as e:
            raise Exception(f"Error fetching pages: {e}")
        
    def create_page(self, page_name: str):
        try:
            new_page = Page(page_name=page_name)
            self.db.add(new_page)
            self.db.commit()
            self.db.refresh(new_page)
            # include generated id in response
            return PageCreatePublic(page_name=str(new_page.page_name))
        except Exception as e:
            raise Exception(f"Error creating page: {e}")
        
        
    
def get_page_controller(db: Session):
    return PageController(db)
    
PageControllerDep = Annotated[PageController, Depends(get_page_controller)]