import { Link } from 'react-router-dom';
import PageMeta from '../components/common/PageMeta';
import IdentityField from '../components/visuals/IdentityField';
import { experience, profile, projects, researchPillars } from '../content';

export default function HomePage() {
  const currentRole = experience[0];

  return (
    <main id="main-content" className="identity-home">
      <PageMeta />

      <section className="identity-hero">
        <aside className="identity-rail" aria-label="Current profile">
          <p className="utility-label">Profile / 2026</p>
          <dl>
            <div>
              <dt>Based</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Now</dt>
              <dd>{currentRole.role}</dd>
              <dd>{currentRole.company}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{profile.availability}</dd>
            </div>
          </dl>
        </aside>

        <div className="identity-hero__main">
          <p className="identity-hero__role">{profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="identity-hero__lead">
            I work on distributed trading systems and research machine learning for uncertain,
            noisy data.
          </p>
          <p className="identity-hero__body">
            My interests are risk, reliability, anomalous behaviour, and decision support in
            connected systems.
          </p>
          <IdentityField />
        </div>
      </section>

      <section className="index-section profile-about">
        <header className="index-section__label">
          <h2>About</h2>
        </header>
        <div className="profile-about__copy">
          {profile.bio.slice(0, 2).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="index-section">
        <header className="index-section__label">
          <h2>Research interests</h2>
        </header>
        <div className="research-index-list">
          {researchPillars.map((pillar) => (
            <article key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="index-section">
        <header className="index-section__label">
          <h2>Selected work</h2>
        </header>
        <div className="work-index-list">
          {projects.map((project) => (
            <Link key={project.slug} to={`/work/${project.slug}`}>
              <p className="index-meta">{project.eyebrow}</p>
              <div>
                <h3>{project.shortTitle}</h3>
                <p>{project.summary}</p>
              </div>
              <span className="index-action">View</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="index-section">
        <header className="index-section__label">
          <h2>Experience</h2>
        </header>
        <div className="experience-index-list">
          {experience.slice(0, 3).map((item) => (
            <article key={`${item.company}-${item.role}`}>
              <p className="index-meta">
                {item.start} – {item.end}
              </p>
              <div>
                <h3>{item.role}</h3>
                <p>
                  {item.company} · {item.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="index-section profile-contact">
        <header className="index-section__label">
          <h2>Contact</h2>
        </header>
        <div>
          <p>{profile.availability}</p>
          <p>Email is the simplest way to reach me.</p>
          <a className="plain-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </section>
    </main>
  );
}
