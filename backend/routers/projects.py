from fastapi import APIRouter, Depends

from database import get_db
from models.schemas import ProjectOut

router = APIRouter(prefix="/api/projects", tags=["projects"])

DEFAULT_PROJECTS = [
    {
        "index": "PROJECT 01",
        "title": "Akshaya Thulir",
        "meta": "Aroganam Technologies · Nov 2025 – May 2026",
        "desc": "Contributed to scalable software solutions under a college incubation initiative, "
        "supporting startup and innovation projects. Built and maintained applications using "
        "Python and web technologies with cross-functional teams.",
        "tags": ["Python", "Web", "Agile"],
    },
    {
        "index": "PROJECT 02",
        "title": "Handwritten Text Recognition",
        "meta": "Personal Project · ML / OCR",
        "desc": "Developed an HTR system using publicly available datasets, applying image "
        "preprocessing and OCR techniques. Trained and iterated ML models for character and "
        "word recognition to boost accuracy.",
        "tags": ["Python", "OCR", "Machine Learning"],
    },
    {
        "index": "PROJECT 03",
        "title": "Library Management System",
        "meta": "Full-Stack MERN Application",
        "desc": "Built a full-stack MERN application for managing books, members, and issue/return "
        "workflows with JWT-based authentication and REST APIs backed by MongoDB.",
        "tags": ["React.js", "Node.js", "MongoDB", "JWT"],
    },
]


@router.get("", response_model=list[ProjectOut])
async def list_projects(db=Depends(get_db)):
    count = await db.projects.count_documents({})
    if count == 0:
        await db.projects.insert_many(DEFAULT_PROJECTS)
    projects = []
    async for doc in db.projects.find({}, {"_id": 0}):
        projects.append(ProjectOut(**doc))
    return projects
