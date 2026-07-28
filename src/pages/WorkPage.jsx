import ArrowLink from '../components/common/ArrowLink';
import PageMeta from '../components/common/PageMeta';
import ProjectVisual from '../components/visuals/ProjectVisuals';
import { pageMetadata, projects } from '../content';

export default function WorkPage() {
  return (
    <main id="main-content" className="page-shell">
      <PageMeta {...pageMetadata.work} />
      <header className="page-hero">
        <p className="page-hero__eyebrow">Selected work</p>
        <h1 className="page-hero__title">Selected work.</h1>
        <p className="page-hero__lead">
          Three projects in distributed systems, industrial prediction, and movement modelling.
        </p>
      </header>

      <div className="work-index">
        {projects.map((project) => (
          <article className="work-card content-auto" key={project.slug}>
            <div className="work-card__visual">
              <ProjectVisual type={project.visual.type} caption={project.visual.cues[0]} />
            </div>
            <div className="work-card__content">
              <p className="work-card__eyebrow">{project.eyebrow}</p>
              <h2 className="work-card__title">{project.title}</h2>
              <p className="work-card__summary">{project.summary}</p>
              <p className="work-card__result">{project.result[0]}</p>
              <ul className="technology-list">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <ArrowLink className="work-card__link" to={`/work/${project.slug}`}>
                Read case study
              </ArrowLink>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
