from models.main import Base
from sqlalchemy import Column, Integer, String, DateTime, Enum as SqlEnum, ForeignKey, event
from enum import Enum
from datetime import datetime

class UserType(Enum):
    ADMIN = "ADMIN"
    USER = "USER"
    APPROVER = "APPROVER"
    READ_ONLY = "READ_ONLY"
    PROGRAM_APPROVER = "PROGRAM_APPROVER"
    

class Status(Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"

    
class User(Base):
    __tablename__ = "users"
    status = Column(SqlEnum(Status, name="status_enum", native_enum=True), nullable=False, default=Status.ACTIVE)
    user_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    email = Column(String, unique=True, index=True, nullable=False)
    user_type = Column(SqlEnum(UserType, name="user_type_enum", native_enum=True), nullable=False, default=UserType.USER)
    contact_number = Column(String, nullable=True)
    password = Column(String(255), nullable=False)
    last_login = Column(DateTime, nullable=True)
    created_at = Column(DateTime, nullable=False, default=datetime.now().replace(microsecond=0))
    is_approved = Column(Integer, nullable=False, default=0)
    user_image = Column(String, nullable=True, default="default")
    modified_at = Column(
        DateTime, nullable=False, default=datetime.now().replace(microsecond=0),
    )
    # relationship removed; foreign key is managed on the activity side
    
@event.listens_for(User, "before_update", propagate=True)
def _set_modtime(mapper, connection, target):
    target.modified_at = datetime.now().replace(microsecond=0)