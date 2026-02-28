from models.main import Base
from sqlalchemy import Column, Integer, String, DateTime, Enum as SqlEnum, ForeignKey

from enum import Enum
from datetime import datetime
from sqlalchemy.orm import relationship
# no need to import ``user``; we only reference its table name in foreign keys

class Status(Enum):
    PENDING = "pending"
    ACTIVE = "active"
    INACTIVE = "inactive"
    
class InstitutionProgramUser(Base):
    __tablename__ = "program_user_institution"
    
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    institution_id = Column(Integer, ForeignKey("institutions.institution_id", ondelete="CASCADE"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"), nullable=False)
    program_id = Column(Integer, ForeignKey("programs.program_id", ondelete="CASCADE"), nullable=True)
    status = Column(SqlEnum(Status, name="status_enum", native_enum=True), nullable=False, default=Status.PENDING)