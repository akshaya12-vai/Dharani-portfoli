import { useEffect, useState } from 'react';
import { getVisitCount, trackVisit } from '../api.js';

export default function Hero() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    trackVisit().then(() =>
      getVisitCount()
        .then((data) => setViews(data.count))
        .catch(() => setViews(null))
    );
  }, []);

  return (
    <section className="hero" id="top">
      <div className="eyebrow">
        <span className="dot" /> Open to Junior / Fresher Software Roles
      </div>
      <h1 className="display">
        Building software
        <br />
        that&apos;s <span className="accent">grounded in code,</span>
        <br />
        aimed at scale.
      </h1>
      <p className="hero-sub">
        I&apos;m Dharani — a Computer Science undergrad building backend systems, full-stack apps, and ML
        tools. Currently a Junior Developer at Aroganam Technologies, Coimbatore.
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">View Projects →</a>
        <a className="btn btn-ghost" href="#contact">Contact Me</a>
      </div>
      <div className="hero-meta">
        <div>
          <div className="m-num">3+</div>
          <div className="m-label">Projects shipped</div>
        </div>
        <div>
          <div className="m-num">2</div>
          <div className="m-label">Internships</div>
        </div>
        <div>
          <div className="m-num">7.1</div>
          <div className="m-label">Current CGPA</div>
        </div>
        <div>
          <div className="m-num">{views === null ? '—' : views}</div>
          <div className="m-label">Site views (MongoDB)</div>
        </div>
      </div>

      <div className="orbit-wrap" aria-hidden="true">
        <div className="orbit o3" />
        <div className="orbit o2">
          <div className="orbit-node">JS</div>
        </div>
        <div className="orbit o1">
          <div className="orbit-node">Py</div>
        </div>
        <div className="core-orb" />
      </div>
    </section>
  );
}
