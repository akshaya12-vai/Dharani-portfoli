from fastapi import APIRouter, Depends

from database import get_db
from models.schemas import ContactMessageIn, ContactMessageOut, utcnow

router = APIRouter(prefix="/api/contact", tags=["contact"])


@router.post("", response_model=ContactMessageOut)
async def create_contact_message(payload: ContactMessageIn, db=Depends(get_db)):
    doc = payload.model_dump()
    doc["created_at"] = utcnow()
    result = await db.contact_messages.insert_one(doc)
    return ContactMessageOut(id=str(result.inserted_id), created_at=doc["created_at"], **payload.model_dump())


@router.get("", response_model=list[ContactMessageOut])
async def list_contact_messages(db=Depends(get_db)):
    """Admin-style endpoint to review submitted messages (no auth — add some before deploying publicly)."""
    messages = []
    async for doc in db.contact_messages.find().sort("created_at", -1):
        messages.append(
            ContactMessageOut(
                id=str(doc["_id"]),
                name=doc["name"],
                email=doc["email"],
                message=doc["message"],
                created_at=doc["created_at"],
            )
        )
    return messages
