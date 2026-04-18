from pyexpat.errors import messages

from core.dep import Session
from models.program import Program
from api.types.ProgramTypes import ProgramCreate, ProgramPublic

class ProgramController:
    def __init__(self, db: Session):
        self.db = db

    def create_program(self, data: ProgramCreate):
        try:
            new_program = Program(
                program_image=data.program_image,
                program_name=data.program_name,
                institution_id=data.institution_id,
            )

            self.db.add(new_program)
            self.db.commit()
            self.db.refresh(new_program)

            return ProgramPublic(message=f"Program {new_program.program_name} created successfully")
        except Exception as e:
            raise Exception(f"failed to create program : {str(e)}")
