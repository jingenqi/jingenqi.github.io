import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      link: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      tech: ["Vue.js", "Firebase", "JavaScript"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      link: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis with charts, graphs, and real-time data updates.",
      tech: ["Python", "Django", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      link: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
      link: "#"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation tool with natural language processing and custom templates.",
      tech: ["Python", "TensorFlow", "FastAPI"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center",
      link: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Modern real estate platform with virtual tours, advanced search, and property management.",
      tech: ["Next.js", "Prisma", "Stripe"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center",
      link: "#"
    }
  ];

  return (
    <main className="page-container">
      <section className="page-section">
        <div className="page-header">
          <h1 className="page-title">Work</h1>
          <p className="page-subtitle">
            Selected projects that showcase my expertise in building digital experiences.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />
                <div className="project-card__overlay">
                  <a href={project.link} className="btn btn--primary">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
