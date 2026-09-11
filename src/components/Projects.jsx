import { useEffect, useState } from 'react';
import { getProjects } from '../api.js';
import { projects as localProjects } from '../data/portfolioData.js';

export default function Projects() {
  const [projects, setProjects] = useState(localProjects);
  const [source, setSource] = useState('local');

  useEffect(() => {
    getProjects()
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setProjects(data);
          setSource('mongodb');
        }
      })
      .catch(() => {
        // Backend not running — keep the bundled data so the page still works.
      });
  }, []);

  return (
    <section id="projects">
      <div className="section-head">
        <div className="kicker">
          Projects {source === 'mongodb' && <span className="live-badge">● Live from MongoDB</span>}
        </div>
        <h2 className="section-title">A few things I&apos;ve built end to end</h2>
      </div>
      <div className="project-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="p-index">{p.index}</div>
            <div className="p-title">{p.title}</div>
            <div className="p-meta">{p.meta}</div>
            <div className="p-desc">{p.desc}</div>
            <div className="p-tags">
              {p.tags.map((t) => (
                <span className="p-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
