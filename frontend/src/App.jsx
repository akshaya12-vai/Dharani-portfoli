import { ThemeProvider } from './context/ThemeContext.jsx';
import Starfield from './components/Starfield.jsx';
import SparkleTrail from './components/SparkleTrail.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <Starfield />
      <div className="glow-orb a" />
      <div className="glow-orb b" />
      <div className="glow-orb c" />
      <SparkleTrail />

      <Navbar />
      <main className="wrap">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
