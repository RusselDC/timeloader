from models.main import Base
from sqlalchemy import Column, Integer, String, DateTime, Enum as SqlEnum, ForeignKey
from enum import Enum
from datetime import datetime

class Status(Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"

class ProgramApprover(Base):
    __tablename__ = "program_approvers"
    
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    program_id = Column(Integer, ForeignKey("programs.program_id", ondelete="CASCADE"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"), nullable=False)
    created_at = Column(DateTime, nullable=False, default=datetime.now().replace(microsecond=0))
    status= Column(SqlEnum(Status, name="status_enum", native_enum=True), nullable=False, default=Status.ACTIVE)
    modified_at = Column(DateTime, nullable=False, default=datetime.now().replace(microsecond=0), onupdate=datetime.now().replace(microsecond=0))
    # relationships removed; use explicit joins on program_id/user_id