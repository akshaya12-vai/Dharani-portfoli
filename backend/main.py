import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import close_client, get_db
from routers import contact, projects, visits

load_dotenv()

app = FastAPI(
    title="Jammugari Dharani — Portfolio API",
    description="FastAPI + MongoDB backend powering the React portfolio site.",
    version="1.0.0",
)

origins = [o.strip() for o in os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",") if o.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router)
app.include_router(projects.router)
app.include_router(visits.router)
@app.get("/")
def home():
    return {"message": "Dharani Portfolio API is running successfully"}

@app.get("/api/health")
async def health():
    db = get_db()
    try:
        await db.command("ping")
        mongo_status = "connected"
    except Exception as exc:  # pragma: no cover - simple diagnostic endpoint
        mongo_status = f"unreachable: {exc}"
    return {"status": "ok", "mongodb": mongo_status}
@app.get("/health")
def health():
    return {"status": "healthy"}

@app.on_event("shutdown")
async def shutdown_event():
    await close_client()
