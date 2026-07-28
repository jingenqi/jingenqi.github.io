import { Download, ExternalLink } from 'lucide-react';
import PageMeta from '../components/common/PageMeta';
import { pageMetadata, profile } from '../content';

export default function ResumePage() {
  return (
    <main id="main-content" className="page-shell resume-page">
      <PageMeta {...pageMetadata.resume} />

      <header className="page-hero resume-hero">
        <p className="page-hero__eyebrow">Resume</p>
        <h1 className="page-hero__title">Resume.</h1>
        <p className="page-hero__lead">
          The PDF is embedded below. You can also open it full screen or download a copy.
        </p>
        <div className="resume-actions" aria-label="Resume actions">
          <a
            className="button button--primary"
            href={profile.resumePath}
            target="_blank"
            rel="noreferrer"
          >
            Open full screen
            <ExternalLink size={17} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a className="button button--secondary" href={profile.resumePath} download>
            Download PDF
            <Download size={17} aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="resume-viewer" aria-labelledby="resume-viewer-title">
        <h2 id="resume-viewer-title" className="sr-only">
          Embedded resume PDF
        </h2>
        <object
          className="resume-viewer__document"
          data={`${profile.resumePath}#view=FitH&toolbar=1&navpanes=0`}
          type="application/pdf"
          aria-label="Enqi Jing resume PDF viewer"
        >
          <div className="resume-viewer__fallback">
            <p>Your browser cannot display the embedded PDF.</p>
            <a className="button button--primary" href={profile.resumePath} target="_blank" rel="noreferrer">
              Open resume PDF
              <ExternalLink size={17} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </object>
      </section>
    </main>
  );
}
