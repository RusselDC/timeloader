

from sqlmodel import SQLModel
from typing import Sequence




class PageData(SQLModel):
    page_id: int | None = None
    page_name: str


class PageCreate(PageData):
    pass



class PagePublic(SQLModel):
    data: Sequence[PageData]
    count: int
    time: str
    
class PageCreatePublic(PageData):
    pass