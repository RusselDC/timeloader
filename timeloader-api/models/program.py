from models.main import Base
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from enum import Enum
from datetime import datetime

class Program(Base):
    __tablename__ = "programs"
    
    program_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    program_name = Column(String, unique=True, nullable=False)
    institution_id = Column(Integer, ForeignKey("institutions.institution_id", ondelete="CASCADE"), nullable=False)
    program_image = Column(String, nullable=True, default="default")
    created_at = Column(DateTime, nullable=False, default=datetime.now().replace(microsecond=0))
    modified_at = Column(DateTime, nullable=False, default=datetime.now().replace(microsecond=0))
    # no ORM relationship; join to institutions manually when needed