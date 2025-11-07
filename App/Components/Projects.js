export default function Projects() {
  const projects = [
    { 
      title: 'MHT Website', 
      description: 'A modern website for MHT with responsive design and interactive features.' 
    },
    { 
      title: 'E-commerce Platform', 
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard.' 
    },
    { 
      title: 'IoT Home Automation', 
      description: 'Smart home system using Arduino and mobile app control.' 
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
