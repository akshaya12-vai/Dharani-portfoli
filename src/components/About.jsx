import profileImg from '../assets/profile.jpg';
import { facts, profile } from '../data/portfolioData.js';

export default function About() {
  return (
    <section id="about">
      <div className="section-head">
        <div className="kicker">About</div>
        <h2 className="section-title">A fresher&apos;s toolkit, built the hard way</h2>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I&apos;m a final-year B.E. Computer Science and Engineering student who prefers building
            things over reading about them. My work spans Python backends and APIs, full-stack MERN
            applications, and applied machine learning — most recently an OCR-based handwritten text
            recognition system.
          </p>
          <p>
            At Aroganam Technologies, I develop backend applications and support automation efforts on
            real internal software. Before that, I built Augmented Reality experiences at PRAYA Labs.
            Between coursework and internships, I&apos;ve learned to move fast between a database schema,
            a REST endpoint, and a training script — without losing sight of what the end user actually
            needs.
          </p>
        </div>
        <div className="about-side">
          <div className="photo-frame">
            <img src={profileImg} alt={`Portrait of ${profile.name}`} />
          </div>
          <div className="photo-caption">
            <b>{profile.name}</b> — {profile.location}
          </div>
          <div className="fact-card">
            {facts.map((f) => (
              <div className="fact-row" key={f.label}>
                <span>{f.label}</span>
                <span>{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
