from typing import Annotated
from fastapi import Depends
from core.dep import Session
from api.types.InstitutionTypes import InstitutionCreate, InstitutionPublic
from models.institution import Institution, InstitutionType
from datetime import datetime

class InstitutionController:
    def __init__(self, db):
        self.db = db
        
    def create_institution(self, institution_create : InstitutionCreate):
        try:
            new_institution = Institution(
                institution_name=institution_create.institution_name,
                institution_type=InstitutionType(institution_create.institution_type),
                institution_abbr=institution_create.institution_abbr,
                institution_domain=institution_create.institution_domain
            )
            self.db.add(new_institution)
            self.db.commit()
            self.db.refresh(new_institution)
            return InstitutionCreate(
                institution_name=str(new_institution.institution_name),
                institution_abbr=str(new_institution.institution_abbr),
                institution_type=new_institution.institution_type.value,
                institution_domain=str(new_institution.institution_domain)
            )
        except Exception as e:
            raise Exception(f"Error creating institution: {e}")
    
    def get_institutions(self):
        try:
            start_time = datetime.now()
            institutions = self.db.query(Institution).all()
            end_time = datetime.now()
            return InstitutionPublic(
                data=institutions,
                count=len(institutions),
                time=str(end_time - start_time)
            )
        except Exception as e:
            raise Exception(f"Error fetching institutions: {e}")
    
def get_institution_controller(db: Session):
    return InstitutionController(db)
    
InstitutionControllerDep = Annotated[InstitutionController, Depends(get_institution_controller)]