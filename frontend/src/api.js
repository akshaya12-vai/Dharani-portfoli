import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: { 'Content-Type': 'application/json' },
});

// Records a page visit (used to power the "views" counter on the hero).
export const trackVisit = () => api.post('/visits').catch(() => null);

export const getVisitCount = () => api.get('/visits/count').then((r) => r.data);

// Sends a contact form submission to MongoDB via the FastAPI backend.
export const sendContactMessage = (payload) => api.post('/contact', payload).then((r) => r.data);

// Fetches project list from MongoDB (falls back to local data if backend is offline).
export const getProjects = () => api.get('/projects').then((r) => r.data);

export default api;
