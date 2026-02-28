from models.main import Base
from sqlalchemy import Column, Integer, String, DateTime, Enum as SqlEnum, ForeignKey
from enum import Enum
from datetime import datetime

class Status(Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    ON_LEAVE = "on_leave"


class Contract(Base):
    __tablename__ = "contracts"
    
    contract_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    institution_id = Column(Integer, ForeignKey("institutions.institution_id", ondelete="CASCADE"), nullable=False)
    program_id = Column(Integer, ForeignKey("programs.program_id", ondelete="CASCADE"), nullable=False)
    trainee_id = Column(String, ForeignKey("trainees.trainee_id", ondelete="CASCADE"), nullable=False)
    status = Column(SqlEnum(Status, name="contract_status_enum", native_enum=True), nullable=False, default=Status.ACTIVE)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=True)
    created_at = Column(DateTime, nullable=False, default=datetime.now().replace(microsecond=0))
    modified_at = Column(DateTime, nullable=False, default=datetime.now().replace(microsecond=0), onupdate=datetime.now().replace(microsecond=0))