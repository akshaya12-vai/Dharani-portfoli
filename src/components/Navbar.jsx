import ThemeToggle from './ThemeToggle.jsx';
import { profile } from '../data/portfolioData.js';

export default function Navbar() {
  return (
    <header>
      <nav>
        <a href="#top" className="logo">
          <span className="logo-mark">{profile.initials}</span>
          {profile.name}
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>
        <div className="nav-right">
          <ThemeToggle />
          <a className="nav-cta" href="#contact">Get in Touch</a>
        </div>
      </nav>
    </header>
  );
}
