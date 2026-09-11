import { education } from '../data/portfolioData.js';

export default function Education() {
  return (
    <section id="education">
      <div className="section-head">
        <div className="kicker">Education</div>
        <h2 className="section-title">Academic background</h2>
      </div>
      <div className="edu-list">
        {education.map((e) => (
          <div className="edu-item" key={e.school}>
            <div className="edu-year">{e.year}</div>
            <div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-deg">{e.degree}</div>
            </div>
            <div className="edu-score">{e.score}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
