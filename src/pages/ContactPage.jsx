import { Download, Github, Linkedin, Mail } from 'lucide-react';
import PageMeta from '../components/common/PageMeta';
import { pageMetadata, profile } from '../content';

export default function ContactPage() {
  return (
    <main id="main-content" className="page-shell">
      <PageMeta {...pageMetadata.contact} />
      <header className="page-hero">
        <p className="page-hero__eyebrow">Contact</p>
        <h1 className="page-hero__title">Contact.</h1>
        <p className="page-hero__lead">{profile.availability}</p>
      </header>

      <section className="contact-layout">
        <div className="contact-intro">
          <p>{profile.availability}</p>
          <p>
            Email is best. If you are writing about a role, research project, or collaboration, a little
            context is useful.
          </p>
        </div>
        <div className="contact-methods">
          <div className="contact-method">
            <span className="contact-method__label">
              <Mail size={17} aria-hidden="true" /> Email
            </span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact-method">
            <span className="contact-method__label">
              <Github size={17} aria-hidden="true" /> GitHub
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/jingenqi
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <div className="contact-method">
            <span className="contact-method__label">
              <Linkedin size={17} aria-hidden="true" /> LinkedIn
            </span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <div className="contact-method">
            <span className="contact-method__label">
              <Download size={17} aria-hidden="true" /> Resume
            </span>
            <a href={profile.resumePath} download>
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
