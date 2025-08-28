import React from 'react';

const ContactPage = () => {
  return (
    <main className="container" style={{ paddingTop: 'var(--header-height)' }}>
      <section style={{ padding: 'var(--space-xl) 0' }}>
        <h1 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-md)' }}>
          Contact
        </h1>
        <p style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-secondary)', marginBottom: 'var(--space-lg)' }}>
          Let's work together on something great.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)' }}>
          <div>
            <h2 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-md)' }}>Get In Touch</h2>
            <p style={{ color: 'var(--color-secondary)', marginBottom: 'var(--space-md)' }}>
              I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just say hello!
            </p>

            <div style={{ marginBottom: 'var(--space-md)' }}>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>Email</h3>
              <a href="mailto:enqi.jing@example.com" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                enqi.jing@example.com
              </a>
            </div>

            <div style={{ marginBottom: 'var(--space-md)' }}>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>Phone</h3>
              <a href="tel:+1555123-4567" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                +1 (555) 123-4567
              </a>
            </div>

            <div>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>Location</h3>
              <p style={{ color: 'var(--color-secondary)' }}>San Francisco, CA</p>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-md)' }}>Connect With Me</h2>
            <p style={{ color: 'var(--color-secondary)', marginBottom: 'var(--space-md)' }}>
              Follow me on social media for updates and insights
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn--outline">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn--outline">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="btn btn--outline">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
