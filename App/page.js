'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (modal) => {
    setActiveModal(modal)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <main>
      <Header openModal={openModal} />
      <div className="container">
        <Hero />
        <PersonalInfo />
        <Skills />
        <Projects />
        <Footer openModal={openModal} />
      </div>
      
      {/* Modals */}
      <AboutModal isOpen={activeModal === 'about'} onClose={closeModal} />
      <SocialModal isOpen={activeModal === 'social'} onClose={closeModal} />
      <ContactModal isOpen={activeModal === 'contact'} onClose={closeModal} />
    </main>
  )
}

// Components
function Header({ openModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="glass-header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-text">MR NIPUN OFC / TECH-WEB</div>
          </div>
          <button className="home-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            Home
          </button>
          <div 
            className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}) }}>Home</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('about'); setIsMenuOpen(false) }}>About</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'}); setIsMenuOpen(false) }}>Skills</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'}); setIsMenuOpen(false) }}>Projects</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('social'); setIsMenuOpen(false) }}>Social Media</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('contact'); setIsMenuOpen(false) }}>Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="profile-container">
        <div className="light-ring"></div>
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
          alt="MR NIPUN" 
          className="profile-image"
        />
      </div>
      <h1>MR NIPUN OFC / TECH-WEB</h1>
      <p>Full Stack Developer | UI/UX Designer | Tech Enthusiast</p>
    </section>
  )
}

function PersonalInfo() {
  return (
    <section className="personal-info">
      <h2>Personal Information</h2>
      <div className="info-grid">
        <div className="info-item">
          <i className="fas fa-user"></i>
          <div>
            <strong>Name:</strong>
            <span>H.M. NIPUN DHANUJAYA</span>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-birthday-cake"></i>
          <div>
            <strong>Age:</strong>
            <span>18</span>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <strong>From:</strong>
            <span>Sri Lanka</span>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-phone"></i>
          <div>
            <strong>Contact:</strong>
            <a href="https://wa.me/+94757255903" target="_blank">+94 75 725 5903</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const skills = [
    { name: 'Java', icon: 'fab fa-java', desc: 'Backend Development' },
    { name: 'Python', icon: 'fab fa-python', desc: 'Scripting & Automation' },
    { name: 'Web Server', icon: 'fas fa-server', desc: 'Server Management' },
    { name: 'Arduino Micro Devices', icon: 'fas fa-microchip', desc: 'IoT Development' },
    { name: 'HTML/CSS', icon: 'fab fa-html5', desc: 'Frontend Development' },
    { name: 'NextJS', icon: 'fab fa-react', desc: 'React Framework' },
    { name: 'Photography', icon: 'fas fa-camera', desc: 'Creative Photography' },
    { name: 'Animation', icon: 'fas fa-film', desc: 'Animation Create' },
    { name: 'Logo Design', icon: 'fas fa-palette', desc: 'Logo Design' }
  ]

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
  )
}

function Projects() {
  const projects = [
    { title: 'MHT Website', description: 'A modern website for MHT with responsive design and interactive features.' },
    { title: 'E-commerce Platform', description: 'Full-stack e-commerce solution with payment integration and admin dashboard.' },
    { title: 'IoT Home Automation', description: 'Smart home system using Arduino and mobile app control.' }
  ]

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
  )
}

function Footer({ openModal }) {
  return (
    <footer>
      <div className="footer-links">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}) }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); openModal('about') }}>About</a>
        <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'}) }}>Skills</a>
        <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'}) }}>Projects</a>
      </div>
      <div className="copyright">
        &copy; 2024 MR NIPUN OFC / TECH-WEB. All Rights Reserved.
      </div>
    </footer>
  )
}

// Modal Components
function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>&times;</button>
        <div style={{display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px'}}>
          <div style={{position: 'relative', width: '80px', height: '80px'}}>
            <div style={{
              position: 'absolute', top: '-4px', left: '-4px', right: '-4px', bottom: '-4px',
              borderRadius: '50%', background: 'conic-gradient(var(--primary-red), var(--purple), var(--dark-red), var(--primary-red))',
              animation: 'rotate 3s linear infinite', zIndex: 1
            }}></div>
            <div style={{
              position: 'absolute', top: '2px', left: '2px', right: '2px', bottom: '2px',
              background: 'var(--black)', borderRadius: '50%', zIndex: 1
            }}></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="MR NIPUN" 
              style={{
                width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover',
                border: '2px solid var(--primary-red)', position: 'relative', zIndex: 2
              }}
            />
          </div>
          <div>
            <h2 style={{margin: '0 0 5px 0', background: 'linear-gradient(to right, var(--primary-red), var(--purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>MR NIPUN</h2>
            <p style={{color: '#aaa', margin: 0}}>Full Stack Developer & Designer</p>
          </div>
        </div>
        
        <div style={{background: 'rgba(255,255,255,0.05)', borderRadius: '15px', padding: '20px', marginBottom: '20px', border: '1px solid var(--glass-border)'}}>
          <div style={{marginBottom: '12px', padding: '8px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '10px'}}>
            <i className="fas fa-user" style={{color: 'var(--primary-red)'}}></i>
            <strong style={{color: 'var(--primary-red)', minWidth: '70px'}}>Name:</strong>
            <span>H.M. NIPUN DHANUJAYA</span>
          </div>
          <div style={{marginBottom: '12px', padding: '8px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '10px'}}>
            <i className="fas fa-birthday-cake" style={{color: 'var(--primary-red)'}}></i>
            <strong style={{color: 'var(--primary-red)', minWidth: '70px'}}>Age:</strong>
            <span>18</span>
          </div>
          <div style={{marginBottom: '12px', padding: '8px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '10px'}}>
            <i className="fas fa-map-marker-alt" style={{color: 'var(--primary-red)'}}></i>
            <strong style={{color: 'var(--primary-red)', minWidth: '70px'}}>From:</strong>
            <span>Sri Lanka</span>
          </div>
          <div style={{padding: '8px 0', display: 'flex', alignItems: 'center', gap: '10px'}}>
            <i className="fas fa-phone" style={{color: 'var(--primary-red)'}}></i>
            <strong style={{color: 'var(--primary-red)', minWidth: '70px'}}>Contact:</strong>
            <a href="https://wa.me/+94757255903" target="_blank" style={{color: 'var(--purple)', textDecoration: 'none'}}>+94 75 725 5903</a>
          </div>
        </div>
        
        <div>
          <p style={{marginBottom: '15px', lineHeight: '1.6'}}>Hello! I'm MR NIPUN, a passionate full-stack developer and designer with expertise in creating modern web applications and digital experiences.</p>
          <p style={{marginBottom: '15px', lineHeight: '1.6'}}>With a strong background in both frontend and backend technologies, I specialize in building responsive websites, web applications, and IoT solutions.</p>
          <p style={{marginBottom: '15px', lineHeight: '1.6'}}>I'm also skilled in photography, animation creation, and logo design, allowing me to create visually appealing and engaging digital content.</p>
        </div>
      </div>
    </div>
  )
}

function SocialModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const socialLinks = [
    { icon: 'fab fa-whatsapp', name: 'WhatsApp Channel', url: 'https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683' },
    { icon: 'fab fa-facebook', name: 'Facebook Account', url: 'https://www.facebook.com/share/1KKrZV2NM8/' },
    { icon: 'fab fa-facebook-f', name: 'Facebook Page', url: 'https://www.facebook.com/share/17cgrxBQix/' },
    { icon: 'fab fa-tiktok', name: 'TikTok Account', url: 'https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/' },
    { icon: 'fab fa-youtube', name: 'YouTube Channel', url: 'https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo' },
    { icon: 'fab fa-instagram', name: 'Instagram', url: 'https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet' },
    { icon: 'fab fa-telegram', name: 'Telegram', url: 'https://t.me/Profesor9999' }
  ]

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>&times;</button>
        <h2 style={{textAlign: 'center', marginBottom: '25px', background: 'linear-gradient(to right, var(--primary-red), var(--purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>My Social Media</h2>
        <div className="social-grid">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" className="social-item">
              <i className={social.icon}></i>
              <p>{social.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>&times;</button>
        <h2 style={{textAlign: 'center', marginBottom: '20px', background: 'linear-gradient(to right, var(--primary-red), var(--purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Contact Me</h2>
        <div>
          <p style={{textAlign: 'center', marginBottom: '20px'}}>If you'd like to get in touch with me, please use the following contact information:</p>
          <div style={{background: 'rgba(255,255,255,0.05)', borderRadius: '15px', padding: '25px', margin: '20px 0', border: '1px solid var(--glass-border)'}}>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{marginBottom: '15px', padding: '12px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '15px'}}>
                <i className="fas fa-envelope" style={{color: 'var(--primary-red)'}}></i>
                <div>
                  <strong>Email:</strong> 
                  <span style={{marginLeft: '10px'}}>mrnipun@techweb.com</span>
                </div>
              </li>
              <li style={{marginBottom: '15px', padding: '12px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '15px'}}>
                <i className="fas fa-phone" style={{color: 'var(--primary-red)'}}></i>
                <div>
                  <strong>Phone:</strong> 
                  <a href="https://wa.me/+94757255903" style={{marginLeft: '10px', color: 'var(--purple)', textDecoration: 'none'}}>+94 75 725 5903</a>
                </div>
              </li>
              <li style={{padding: '12px 0', display: 'flex', alignItems: 'center', gap: '15px'}}>
                <i className="fas fa-map-marker-alt" style={{color: 'var(--primary-red)'}}></i>
                <div>
                  <strong>Location:</strong> 
                  <span style={{marginLeft: '10px'}}>Sri Lanka</span>
                </div>
              </li>
            </ul>
          </div>
          <p style={{textAlign: 'center', lineHeight: '1.6'}}>You can also reach out to me through my social media profiles for a quicker response.</p>
        </div>
      </div>
    </div>
  )
    }
