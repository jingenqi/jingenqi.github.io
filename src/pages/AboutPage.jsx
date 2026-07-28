import { Download } from 'lucide-react';
import PageMeta from '../components/common/PageMeta';
import { education, experience, pageMetadata, profile } from '../content';

const skillGroups = [
  { title: 'Programming', items: profile.skills.programming },
  { title: 'Machine learning and data analysis', items: profile.skills.machineLearning },
  { title: 'Security and risk analysis', items: profile.skills.security },
  { title: 'Distributed systems', items: profile.skills.systems },
  { title: 'Data and infrastructure', items: profile.skills.infrastructure },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="page-shell">
      <PageMeta {...pageMetadata.about} />
      <header className="page-hero">
        <p className="page-hero__eyebrow">About</p>
        <h1 className="page-hero__title">About me.</h1>
        <p className="page-hero__lead">
          I work between software engineering and applied research, with experience in distributed trading
          systems, industrial modelling, AI evaluation, and cyber-risk analysis.
        </p>
      </header>

      <section className="bio-layout">
        <aside className="bio-layout__aside">
          <p className="eyebrow">{profile.title}</p>
          <p>{profile.location}</p>
          <a className="button button--primary" href={profile.resumePath} download>
            Download resume
            <Download size={17} aria-hidden="true" />
          </a>
        </aside>
        <div className="bio-layout__copy">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="experience-section content-auto">
        <header className="section-heading">
          <h2>Experience</h2>
        </header>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline__item" key={`${item.company}-${item.role}`}>
              <p className="timeline__date">
                {item.start} - {item.end}
              </p>
              <div>
                <h3 className="timeline__role">{item.role}</h3>
                <p className="timeline__organization">
                  {item.company} · {item.location}
                </p>
                <p className="timeline__summary">{item.summary}</p>
                <p className="timeline__result">{item.highlight}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-content content-auto">
        <header className="section-heading">
          <h2>Education</h2>
        </header>
        <div className="education-list">
          {education.map((item) => (
            <article className="education-item" key={item.degree}>
              <div>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                {item.dissertation && <p>{item.dissertation}</p>}
              </div>
              <p>
                {item.start} - {item.end}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-content content-auto">
        <header className="section-heading">
          <h2>Technical skills</h2>
        </header>
        <div className="capability-list">
          {skillGroups.map((group) => (
            <article className="capability-item" key={group.title}>
              <h3 className="capability-item__title">{group.title}</h3>
              <ul className="technology-list" aria-label={`${group.title} skills`}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
