from datetime import datetime, timezone

from pydantic import BaseModel, EmailStr, Field


class ContactMessageIn(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=4000)


class ContactMessageOut(ContactMessageIn):
    id: str
    created_at: datetime


class ProjectOut(BaseModel):
    index: str
    title: str
    meta: str
    desc: str
    tags: list[str]


class VisitCount(BaseModel):
    count: int


def utcnow() -> datetime:
    return datetime.now(timezone.utc)
