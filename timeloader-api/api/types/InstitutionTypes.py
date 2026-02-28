from sqlmodel import SQLModel
from models.institution import InstitutionType



class InstitutionCreate(SQLModel):
    institution_name: str
    institution_abbr: str 
    institution_type: InstitutionType
    institution_domain: str
    
    
class InstitutionData(SQLModel):
    institution_id: int
    institution_name: str
    institution_abbr: str 
    institution_type: InstitutionType
    institution_domain: str
    
class InstitutionPublic(SQLModel):
    data: list[InstitutionData]
    count: int
    time: str