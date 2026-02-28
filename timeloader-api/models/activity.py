from models.main import Base
from sqlalchemy import Column, Integer, String, DateTime, Enum as SqlEnum, ForeignKey
from enum import Enum
from datetime import datetime


class ActivityType(Enum):
    DELETE = "delete"
    READ = "read"
    CREATE = "create"
    UPDATE = "update"
    AUTH = "authentication"

class Activity(Base):
    __tablename__ = "activities"
    
    activity_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"), nullable=False)
    activity_type = Column(SqlEnum(ActivityType, name="activity_type_enum", native_enum=True), nullable=False, default=ActivityType.READ)
    activity_page = Column(
        String,
        ForeignKey("pages.page_name", ondelete="CASCADE"),
        nullable=False,
    )
    timestamp = Column(DateTime, nullable=False, default=datetime.now().replace(microsecond=0))

    # no ORM relationships; use explicit joins when querying if needed