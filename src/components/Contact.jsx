import { useState } from 'react';
import { sendContactMessage } from '../api.js';
import { profile } from '../data/portfolioData.js';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendContactMessage(form);
      setStatus('sent');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <div className="contact-panel">
        <h2>Let&apos;s build something worth shipping.</h2>
        <p>Open to junior developer, backend, and full-stack roles — reach out any time.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="What are you building?"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
          <div className="contact-actions">
            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message →'}
            </button>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>Email Instead</a>
          </div>
          {status === 'sent' && <p className="form-note success">Thanks! Your message was saved and I&apos;ll get back to you soon.</p>}
          {status === 'error' && <p className="form-note error">Couldn&apos;t reach the server — try emailing me directly instead.</p>}
        </form>

        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
