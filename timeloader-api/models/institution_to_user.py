from models.main import Base
from sqlalchemy import Column, Integer, String, DateTime, Enum as SqlEnum, ForeignKey
from enum import Enum

class Status(Enum):
    PENDING = "pending"
    ACTIVE = "active"
    INACTIVE = "inactive"
    
class InstitutionToUser(Base):
    __tablename__ = "institution_to_user"
    
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    institution_id = Column(Integer, ForeignKey("institutions.institution_id", ondelete="CASCADE"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"), nullable=False)
    status = Column(SqlEnum(Status, name="status_enum", native_enum=True), nullable=False, default=Status.PENDING)