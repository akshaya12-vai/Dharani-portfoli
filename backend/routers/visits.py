from fastapi import APIRouter, Depends

from database import get_db
from models.schemas import VisitCount, utcnow

router = APIRouter(prefix="/api/visits", tags=["visits"])


@router.post("")
async def record_visit(db=Depends(get_db)):
    await db.visits.insert_one({"visited_at": utcnow()})
    count = await db.visits.count_documents({})
    return {"count": count}


@router.get("/count", response_model=VisitCount)
async def get_visit_count(db=Depends(get_db)):
    count = await db.visits.count_documents({})
    return VisitCount(count=count)
