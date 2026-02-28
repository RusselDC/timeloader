from sqlmodel import SQLModel
from enum import Enum



class TraineeCreateData(SQLModel):
    trainee_id: str
    user_id: int
    first_name: str
    last_name: str
    birth_date: str
    gender: str
    