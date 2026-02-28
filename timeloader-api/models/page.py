from models.main import Base
# importing the activity module here guarantees that the ``Activity`` class is
# defined before the ``Page`` mapper is initialized.  without this, a
# reference like ``relationship("Activity")`` would be evaluated at mapper
# setup time and fail with an ``InvalidRequestError`` if the activity module
# hadn't yet been imported (which is what your traceback showed).
import models.activity  # noqa: F401
from sqlalchemy import Column, Integer, String



class Page(Base):
    __tablename__ = "pages"
    page_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    page_name = Column(String, unique=True, index=True, nullable=False)
    # dropping ORM relationships; foreign key is managed in Activity model
    # and any joins can be written manually in queries.