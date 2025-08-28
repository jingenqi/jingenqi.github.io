import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState('about');

  // Resume content based on actual LaTeX CV
  const resumeMarkdown = `
# Enqi Jing
**Master's Candidate in Scientific Computing & Predictive Modelling**
📧 Enqi.Jing@warwick.ac.uk | 📱 +44-0754-1135-011
🌐 [jingenqi.tech](https://jingenqi.tech) | 🔗 [GitHub](https://github.com/jingenqi)

---

## Profile

I am an ambitious Master's candidate in Scientific Computing and Predictive Modelling with a strong background in software development and machine learning. I have proven experience in designing scalable systems, developing RESTful APIs, and creating data-driven solutions using Java, Python, and cloud technologies. I am a self-motivated problem solver with a passion for addressing complex challenges and driving innovation through collaboration.

---

## Education

### **Master of Science in Computer Science** | Merit
*University of Warwick, Coventry, UK* | Oct. 2023 - Jan. 2025

### **Bachelor of Science in Computer Science** | 2:1 Honours
*University of Warwick, Coventry, UK* | Sep. 2020 - Jul. 2023

---

## Work Experience

### **Data Engineering** | Outlier
*Remote, US* | Oct. 2024 - Present

Focus on data annotation in the fields of Coding, Maths and Chinese.
- Involved in LLM coding evaluation projects to assess model capabilities
- Attended SFT and RLHF related projects to improve model performance
- Worked as senior reviewer in multiple coding and maths projects and hosted webinars for training

### **Data Scientist, INTERN** | Shangu Cyber Security Technology Co., Ltd
*Zhengzhou, China* | Jul. - Aug. 2023

Managed and optimized databases on Kylin OS, performed advanced Linux server administration and implemented virtualization technologies.
- Managed and optimized MySQL, Oracle, and Kingbase8 databases within Kylin OS, improving performance and ensuring data integrity
- Implemented virtualization technologies and Linux system administration, including LVM disk expansion, new disk mounting, NFS configuration, and common Linux commands for system optimization

### **Business Intelligence Engineer, INTERN** | Saint Laurent Consulting
*Remote* | Oct. 2022 - Jan. 2023

Designed and implemented a scalable data pipeline and analytics dashboard for COVID-19 trends, leveraging Python, PostgreSQL, Flask, Tableau, and AWS.
- Engineered automated ETL pipeline using Python, BeautifulSoup, and Pandas for web scraping, with data efficiently stored in PostgreSQL database
- Built and deployed real-time dashboard using Tableau and Flask, integrating data from RESTful APIs and implementing AWS infrastructure, reducing manual data collection by 95%

---

## Key Projects

### **E-commerce System Development** | Full Stack Engineer
*Mar. 2024 - Present*

- Developed full-stack e-commerce system using Django and React, integrating Django REST Framework (DRF) for backend API management and React for front-end data binding
- Deployed system in production environment using UWSGI and Nginx, with automated deployment through Ansible
- Implemented unit testing, documentation with Sphinx, and continuous integration practices

### **Leveraging Data-Driven Insights for Enhanced Aluminium Pressing Quality**
*WMG, University of Warwick* | Sep. 2023 - Oct. 2024

Research Assistant - Collaborative research project with UK-based company employing machine learning algorithms to investigate mechanical properties of aluminium alloys.
- Conducted intensive data collection on aluminium press profiles and developed DNN model achieving 15% increased prediction accuracy over SVR and Decision Tree models
- Analyzed noise variables using Local Outlier Filter (LOF), improving prediction accuracy by 20%
- Achieved 10% improvement in DNN accuracy through regression model optimization

### **Online Mentorship Management System** | Backend Software Engineer
*Jan. - Mar. 2022*

- Designed and implemented RESTful APIs using Java Spring Boot, Spring Data JPA, and JWT for user authentication, securing over 90% of API endpoints and increasing user engagement by 20%
- Developed efficient data models with MySQL, Spring Data JPA, and Hibernate, reducing query response time by 30%
- Applied unit testing and custom exception handling with JUnit and Spring Security, reducing bug incidents by 15%

---

## Skills and Expertise

### Programming Languages
**Advanced**: Python | **Intermediate**: Java | **Familiar**: SQL, HTML/CSS, C++, Swift, Go, C, React

### Machine Learning & Data Science
- **Frameworks**: NumPy, Pandas, Scikit-Learn, PyTorch, Keras
- **Techniques**: PCA, Clustering, CNN, ResNet, RNN, Time Series Analysis

### Tools & Technologies
Git, Docker, Linux, PostgreSQL, Matlab, LaTeX

### Mathematics & Modelling
- **Expertise**: Statistics, Pure Mathematics, Linear Algebra
- **Techniques**: Particle-Based Modelling, Numerical Computation

### Domain Expertise
Trajectory Modelling, Emotion Classification, Predictive Analytics

### Languages
- **English**: Proficient
- **Mandarin**: Native

### Professional Skills
Team Leadership, Project Management, Communication, Detail-Oriented
  `;

  const aboutContent = `
## About Me

I'm a software engineer with hands-on experience in full-stack development, machine learning, and data engineering. My journey spans from building production e-commerce systems to developing predictive models for manufacturing quality control.

## Professional Experience

Currently working as a Data Engineer at Outlier, focusing on LLM evaluation and model improvement through data annotation. I've led coding and mathematics projects while hosting training webinars for teams across different time zones.

Previously, I worked as a Data Scientist at Shangu Cyber Security, where I managed and optimized databases on Kylin OS and implemented virtualization technologies. I also built scalable data pipelines and analytics dashboards at Saint Laurent Consulting, creating COVID-19 trend analysis systems that automated 95% of manual data collection.

## Technical Focus

I'm drawn to projects where technology solves real problems. Whether it's improving manufacturing processes through predictive modelling or building systems that scale, I believe the best solutions come from understanding both the technical challenges and the business needs.

My experience spans from low-level system administration to high-level machine learning, which gives me a good sense of where bottlenecks hide and how different pieces fit together. I approach problems methodically but stay flexible when the data tells a different story.

## What I Build

I've developed full-stack e-commerce systems using Django and React, implemented RESTful APIs with Java Spring Boot, and created machine learning models that improved prediction accuracy by 15-20%. I'm particularly interested in how AI systems can be made more reliable and how machine learning can solve practical engineering problems.

When I'm not working on client projects, I'm probably tinkering with new frameworks or contributing to open source projects.
  `;

  return (
    <main className="page-container">
      <section className="page-section">
        <div className="page-header">
          <h1 className="page-title">About</h1>
          <p className="page-subtitle">
            Get to know me, my background, and what drives my passion for technology.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-button ${activeTab === 'about' ? 'tab-button--active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About Me
          </button>
          <button
            className={`tab-button ${activeTab === 'resume' ? 'tab-button--active' : ''}`}
            onClick={() => setActiveTab('resume')}
          >
            Resume
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'about' && (
            <div className="about-content">
              <div className="markdown-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {aboutContent}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {activeTab === 'resume' && (
            <div className="resume-content">
              <div className="resume-actions">
                <button className="btn btn--outline">
                  📄 Download PDF
                </button>
                <button className="btn btn--outline">
                  🖨️ Print
                </button>
              </div>
              <div className="markdown-content resume-markdown">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {resumeMarkdown}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default SkillsPage;
