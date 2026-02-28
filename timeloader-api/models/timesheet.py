from models.main import Base
from sqlalchemy import Column, Integer, String, DateTime,Date, Enum as SqlEnum, ForeignKey
from enum import Enum
from datetime import datetime

class Status(Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    
class Timesheet(Base):
    __tablename__ = "timesheets"
    
    timesheet_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"), nullable=False)
    institution_id = Column(Integer, ForeignKey("institutions.institution_id", ondelete="CASCADE"), nullable=False)
    program_id = Column(Integer, ForeignKey("programs.program_id", ondelete="CASCADE"), nullable=False)
    date = Column(Date, nullable=False, default=datetime.now().date())
    hours_worked = Column(Integer, nullable=False)
    description = Column(String, nullable=True)
    status = Column(SqlEnum(Status, name="status_enum", native_enum=True), nullable=False, default=Status.PENDING)
    approved_by = Column(Integer, ForeignKey("users.user_id", ondelete="SET NULL"), nullable=True)
    created_at = Column(DateTime, nullable=False, default=datetime.now().replace(microsecond=0))
    modified_at = Column(DateTime, nullable=False, default=datetime.now().replace(microsecond=0), onupdate=datetime.now().replace(microsecond=0))
    
    # relationship removed; foreign key is sufficient