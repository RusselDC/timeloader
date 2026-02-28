from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import computed_field
from urllib.parse import quote_plus

class Settings(BaseSettings):
    
    APP_NAME: str
    VERSION: str
    DATABASE_DRIVER: str
    DATABASE_USER: str
    DATABASE_PASSWORD: str
    DATABASE_HOST: str
    DATABASE_PORT: str
    DATABASE_NAME: str
    JWT_SECRET_KEY: str = "testHashKey"
    JWT_ALGORITHM: str = "HS256"
    model_config = SettingsConfigDict(env_file=".env")
    
    @computed_field
    @property
    def DATABASE_URL(self) -> str:
        password = quote_plus(self.DATABASE_PASSWORD)
        return f"{self.DATABASE_DRIVER}://{self.DATABASE_USER}:{password}@{self.DATABASE_HOST}:{self.DATABASE_PORT}/{self.DATABASE_NAME}"
    
    
settings = Settings()  # type: ignore