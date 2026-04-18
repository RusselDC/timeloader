from datetime import datetime

from models.main import Base
from sqlmodel import Column, String, Integer, DateTime,ForeignKey,Date

class Approver(Base):
    __tablename__ = "approver"
    approver_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    birth_date = Column(Date, nullable=False)
    gender = Column(String, nullable=False)
    created_at = Column(DateTime, nullable=False, default=datetime.now())
    modified_at = Column(DateTime, nullable=False, default=datetime.now(), onupdate=datetime.now())
