import PageMeta from '../components/common/PageMeta';
import {
  pageMetadata,
  researchExperience,
  researchPillars,
  researchStatement,
} from '../content';

export default function ResearchPage() {
  return (
    <main id="main-content" className="page-shell">
      <PageMeta {...pageMetadata.research} />
      <header className="page-hero">
        <p className="page-hero__eyebrow">Research</p>
        <h1 className="page-hero__title">Research interests and experience.</h1>
        <p className="page-hero__lead">
          My research has covered uncertainty, anomaly detection, cyber-risk, industrial prediction, and
          movement modelling.
        </p>
      </header>

      <section className="research-overview">
        <p className="research-overview__statement">{researchStatement}</p>
        <div className="research-methods">
          {researchPillars.map((pillar) => (
            <article className="method-item" key={pillar.title}>
              <h2 className="method-item__title">{pillar.title}</h2>
              <p className="method-item__text">{pillar.description}</p>
              <ul className="technology-list">
                {pillar.methods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <header className="section-heading">
          <h2>Research projects</h2>
        </header>
        <div className="timeline">
          {researchExperience.map((item) => (
            <article className="timeline__item" key={item.title}>
              <p className="timeline__date">
                {item.start} - {item.end}
              </p>
              <div>
                <h3 className="timeline__role">{item.title}</h3>
                <p className="timeline__organization">{item.organisation}</p>
                <p className="timeline__summary">{item.summary}</p>
                <p className="timeline__result">{item.contribution}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
