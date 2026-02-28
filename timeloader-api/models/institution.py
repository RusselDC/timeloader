from models.main import Base
from sqlalchemy import Column, Integer, String, DateTime, Enum as SqlEnum, event
from enum import Enum
from datetime import datetime

class InstitutionType(Enum):
    ACADEMIC = "academic"
    INDUSTRY = "industry"
    GOVERNMENT = "government"
    SELF = "self"


class Institution(Base):
    __tablename__ = "institutions"
    
    institution_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    institution_name = Column(String, unique=True, nullable=False)
    institution_abbr = Column(String, unique=True, nullable=True)
    institution_type = Column(SqlEnum(InstitutionType, name="institution_type_enum", native_enum=True), nullable=False)
    institution_domain = Column(String, unique=False, nullable=True)
    institution_image = Column(String, nullable=True, default="default")
    created_at = Column(DateTime, nullable=False, default=datetime.now().replace(microsecond=0))
    modified_at = Column(DateTime, nullable=False, default=datetime.now().replace(microsecond=0))
    # no ORM relationship; query via foreign key in Program instead
    
@event.listens_for(Institution, "before_update", propagate=True)
def _set_modtime(mapper, connection, target):
    target.modified_at = datetime.now().replace(microsecond=0)