from fastapi import APIRouter , HTTPException
from api.types.InstitutionTypes import InstitutionCreate
from api.controller.InstitutionController import InstitutionControllerDep

institution = APIRouter(prefix="/institution", tags=["institution"])

@institution.post("/")
def read_institutions(controller: InstitutionControllerDep, data:InstitutionCreate):
    try:
        return controller.create_institution(institution_create=data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@institution.get("/")
def get_institutions(controller: InstitutionControllerDep):
    try:
        return controller.get_institutions()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))