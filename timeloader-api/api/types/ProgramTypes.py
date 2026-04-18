from sqlmodel import SQLModel


class ProgramCreate(SQLModel):
    program_name : str
    institution_id : int
    program_image : str

class ProgramPublic(SQLModel):
    message : str