import { useEffect } from "react";

const Projects = ({ t, githubProjects, fetchGithubProjects, isLoading }) => {
  useEffect(() => {
    fetchGithubProjects();
  }, []);
  return (
    <section id="projects" className="section">
      <h2 className="section-title">{t.projects.title}</h2>
      <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
        {t.projects.subtitle}
      </p>
      {githubProjects.length === 0 ? (
        <button className="load-btn" onClick={fetchGithubProjects} disabled={isLoading}>
          {isLoading ? t.projects.loading : t.projects.loadButton}
        </button>
      ) : (
        <div className="projects-grid">
          {githubProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header-section">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">
                  {project.description || 'Project'}
                </p>
              </div>
                <div className="project-footer">
                  <div className="project-meta">
                    {project.language && (
                      <span className="project-lang">{project.language}</span>
                    )}
                    {project.stargazers_count > 0 && (
                      <span className="project-stars">⭐ {project.stargazers_count}</span>
                    )}
                  </div>
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    {t.projects.viewCode} →
                  </a>
                </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
