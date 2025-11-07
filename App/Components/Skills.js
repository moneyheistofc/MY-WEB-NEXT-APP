export default function Skills() {
  const skills = [
    { 
      name: 'Java', 
      icon: 'fab fa-java', 
      desc: 'Backend Development' 
    },
    { 
      name: 'Python', 
      icon: 'fab fa-python', 
      desc: 'Scripting & Automation' 
    },
    { 
      name: 'Web Server', 
      icon: 'fas fa-server', 
      desc: 'Server Management' 
    },
    { 
      name: 'Arduino Micro Devices', 
      icon: 'fas fa-microchip', 
      desc: 'IoT Development' 
    },
    { 
      name: 'HTML/CSS', 
      icon: 'fab fa-html5', 
      desc: 'Frontend Development' 
    },
    { 
      name: 'NextJS', 
      icon: 'fab fa-react', 
      desc: 'React Framework' 
    },
    { 
      name: 'Photography', 
      icon: 'fas fa-camera', 
      desc: 'Creative Photography' 
    },
    { 
      name: 'Animation', 
      icon: 'fas fa-film', 
      desc: 'Animation Create' 
    },
    { 
      name: 'Logo Design', 
      icon: 'fas fa-palette', 
      desc: 'Logo Design' 
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-card-header">
              <i className={skill.icon}></i>
              <h3>{skill.name}</h3>
            </div>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
    }
