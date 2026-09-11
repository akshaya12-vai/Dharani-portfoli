# Jammugari Dharani — Full-Stack Portfolio

A full-stack rebuild of the original portfolio design with:

- **Frontend:** React (Vite) — same violet/magenta/cyan "Nebula" aesthetic as the original design, plus:
  - A **theme switcher** — 4 color palettes (Nebula, Aurora, Sunset, Ocean) and a light/dark mode toggle, saved to `localStorage`.
  - A **cursor sparkle trail** — a canvas-based particle effect that follows the mouse (and finger, on touch devices), tinted with the active theme's colors. Can be toggled off from the theme panel.
  - The animated starfield background and glow orbs from the original design.
- **Backend:** Python (FastAPI) — a small REST API with three resources:
  - `POST /api/contact` — saves a contact-form submission to MongoDB.
  - `GET /api/projects` — serves the project list from MongoDB (seeds default data on first run).
  - `POST /api/visits` / `GET /api/visits/count` — a simple visit counter stored in MongoDB, shown live on the hero section.
- **Database:** MongoDB, accessed asynchronously via Motor.

```
portfolio-fullstack/
├── frontend/     React + Vite app
├── backend/      FastAPI app
└── README.md
```

## Quickest start: Docker Compose

If you have [Docker](https://www.docker.com/) installed, this spins up MongoDB, the
FastAPI backend, and the built React frontend together — no local Node/Python/MongoDB
installs needed:

```bash
docker compose up --build
```

- Site: http://localhost:3000
- API docs: http://localhost:8000/docs
- MongoDB: available on `localhost:27017` if you want to inspect it with Compass or `mongosh`

Data persists in a Docker volume (`mongo_data`) between restarts. Stop everything with
`docker compose down` (add `-v` to also wipe the database volume).

The steps below are for running each piece natively instead, which is handier while
actively developing the frontend (hot reload, etc.).

## 1. Prerequisites

- Node.js 18+
- Python 3.10+
- A MongoDB instance — either:
  - Local: install MongoDB Community Server and run it on `mongodb://localhost:27017`, or
  - Cloud: a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (gives you a `mongodb+srv://...` URI).

## 2. Backend setup (FastAPI + MongoDB)

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt

cp .env.example .env            # then edit .env with your MongoDB URI
uvicorn main:app --reload --port 8000
```

- API docs (Swagger UI): http://localhost:8000/docs
- Health check: http://localhost:8000/api/health — confirms MongoDB is reachable.

## 3. Frontend setup (React + Vite)

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173. The Vite dev server proxies any `/api/*` request to
`http://localhost:8000`, so the frontend and backend talk to each other automatically —
no extra configuration needed for local development.

To point the frontend at a deployed backend instead, create `frontend/.env` with:

```
VITE_API_URL=https://your-backend-domain.com/api
```

## 4. Building for production

```bash
cd frontend
npm run build      # outputs static files to frontend/dist
```

Serve `frontend/dist` from any static host (Vercel, Netlify, Nginx, etc.), and deploy
`backend/` to any Python host (Render, Railway, Fly.io, a VPS with `uvicorn`/`gunicorn`, etc.).
Set `CORS_ORIGINS` in the backend's `.env` to your deployed frontend URL.

## 5. Customizing

- **Content:** edit `frontend/src/data/portfolioData.js` for the static About/Skills/Experience/Education/Certifications content.
- **Projects:** once the backend is running, `GET /api/projects` becomes the source of truth (seeded from `backend/routers/projects.py` on first run) — edit documents directly in the `projects` MongoDB collection to update the live site without a redeploy.
- **Themes:** add or tweak color palettes in `frontend/src/context/ThemeContext.jsx` (`THEMES` object).
- **Sparkle effect:** tune particle count, size, speed and colors in `frontend/src/components/SparkleTrail.jsx`.
- **Photo:** replace `frontend/src/assets/profile.jpg` with a new image (same filename, or update the import in `About.jsx`).

## 6. Notes

- The contact form endpoint (`GET /api/contact`) that lists saved messages has no authentication — it's meant for local/admin use while developing. Add auth before exposing it publicly.
- If the backend isn't running, the site still works: the Projects section falls back to bundled data, and the hero view counter just shows a dash.
