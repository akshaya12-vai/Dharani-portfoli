import { experience } from '../data/portfolioData.js';

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-head">
        <div className="kicker">Experience</div>
        <h2 className="section-title">Where I&apos;ve put the skills to work</h2>
      </div>
      <div className="timeline">
        {experience.map((e) => (
          <div className="t-item" key={e.role + e.meta}>
            <div className="t-dot" />
            <div className="t-role">
              {e.role} {e.certified && <span className="cert-badge">Certified</span>}
            </div>
            <div className="t-meta">{e.meta}</div>
            <ul className="t-list">
              {e.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
