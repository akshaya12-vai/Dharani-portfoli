import { skillGroups } from '../data/portfolioData.js';

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-head">
        <div className="kicker">Skills</div>
        <h2 className="section-title">Languages, frameworks &amp; tools I reach for</h2>
      </div>
      <div className="skill-groups">
        {skillGroups.map((g) => (
          <div className="skill-card" key={g.title}>
            <h3>{g.title}</h3>
            <div className="chip-row">
              {g.chips.map((c) => (
                <span className="chip" key={c}>{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
