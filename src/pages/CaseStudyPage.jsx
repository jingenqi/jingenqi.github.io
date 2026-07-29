import { Navigate, useParams } from 'react-router-dom';
import ArrowLink from '../components/common/ArrowLink';
import PageMeta from '../components/common/PageMeta';
import ProjectVisual from '../components/visuals/ProjectVisuals';
import { profile, projects } from '../content';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) return <Navigate to="/work" replace />;

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main id="main-content" className="case-study">
      <PageMeta
        title={project.title}
        path={`/work/${project.slug}`}
        description={project.summary}
        image={project.shareImage}
        imageAlt={`${project.shortTitle} case study by ${profile.name}`}
      />

      <header className="case-hero">
        <div className="case-hero__layout">
          <div>
            <p className="case-hero__eyebrow">{project.eyebrow}</p>
            <h1 className="case-hero__title">{project.title}</h1>
            <p className="case-hero__lead">{project.summary}</p>
          </div>
          <div className="case-hero__visual">
            <ProjectVisual type={project.visual.type} caption={project.visual.cues.join(' · ')} />
          </div>
        </div>
        <dl className="case-meta">
          <div className="case-meta__item">
            <dt className="case-meta__label">Focus</dt>
            <dd className="case-meta__value">{project.eyebrow}</dd>
          </div>
          <div className="case-meta__item">
            <dt className="case-meta__label">Methods</dt>
            <dd className="case-meta__value">{project.technologies.slice(0, 4).join(', ')}</dd>
          </div>
          <div className="case-meta__item">
            <dt className="case-meta__label">Evidence</dt>
            <dd className="case-meta__value">
              {project.metrics.length
                ? project.metrics.map((metric) => metric.value).join(' · ')
                : 'Comparative model evaluation'}
            </dd>
          </div>
        </dl>
      </header>

      <div className="case-body">
        <section className="case-section">
          <h2 className="case-section__title">Context</h2>
          <div className="case-section__content">
            <p>{project.context}</p>
          </div>
        </section>
        <section className="case-section">
          <h2 className="case-section__title">Challenge</h2>
          <div className="case-section__content">
            <p>{project.challenge}</p>
          </div>
        </section>
        <section className="case-section">
          <h2 className="case-section__title">Contribution</h2>
          <div className="case-section__content">
            <ul className="case-list">
              {project.contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="case-section">
          <h2 className="case-section__title">Outcome</h2>
          <div className="case-section__content">
            <ul className="case-list">
              {project.result.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.metrics.length > 0 && (
              <div className="case-result">
                {project.metrics.map((metric) => (
                  <div key={metric.value}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      <nav className="case-navigation" aria-label="Case study navigation">
        <ArrowLink to="/work">All selected work</ArrowLink>
        <ArrowLink to={`/work/${nextProject.slug}`}>Next: {nextProject.title}</ArrowLink>
      </nav>
    </main>
  );
}
