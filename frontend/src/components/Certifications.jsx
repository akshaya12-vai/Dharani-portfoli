import { certifications } from '../data/portfolioData.js';

export default function Certifications() {
  return (
    <section id="certs">
      <div className="section-head">
        <div className="kicker">Certifications &amp; Achievements</div>
        <h2 className="section-title">Recognition along the way</h2>
      </div>
      <div className="cert-grid">
        {certifications.map((c) => (
          <div className="cert-card" key={c.title}>
            <div className="c-title">{c.title}</div>
            <div className="c-desc">{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
