from sqlalchemy import Column, Integer, String,Date, ForeignKey, DateTime, Enum as SqlEnum
from models.main import Base
from datetime import datetime

class Trainee(Base):
    __tablename__ = "trainees"
    
    trainee_id = Column(String, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"), nullable=False)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    birth_date = Column(Date, nullable=False)
    gender = Column(String, nullable=False)
    created_at = Column(DateTime, nullable=False, default=datetime.now().replace(microsecond=0))
    modified_at = Column(DateTime, nullable=False, default=datetime.now().replace(microsecond=0), onupdate=datetime.now().replace(microsecond=0))
