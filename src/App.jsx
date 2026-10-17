import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import './App.css'

const projects = [
  {
    name: 'Ilai Meal Planner',
    category: 'FOOD & LIFESTYLE',
    description: 'Plan a week of Tamil cooking: browse and filter dishes, place meals on the calendar, and build an ingredient list as you go.',
    stack: ['React', 'Redux', 'MUI'],
    demo: 'https://its-gopika-git.github.io/meal-planner/',
    source: 'https://github.com/its-gopika-git/meal-planner',
    featured: true,
  },
  {
    name: 'React Quiz Mastery',
    category: 'LEARNING',
    description: 'A fast-paced frontend quiz for interview prep, with multiple-choice questions, progress tracking, and a score at the end.',
    stack: ['React', 'JavaScript', 'CSS'],
    demo: 'https://its-gopika-git.github.io/react-quiz/',
    source: 'https://github.com/its-gopika-git/react-quiz',
  },
  {
    name: 'Coffee Shop',
    category: 'COMMERCE',
    description: 'Customize a drink by size, milk, and extras, then add it to your bag and follow the order flow from a neighborhood coffee storefront.',
    stack: ['React', 'JavaScript', 'CSS'],
    demo: 'https://its-gopika-git.github.io/coffee-shop/',
    source: 'https://github.com/its-gopika-git/coffee-shop',
  },
  {
    name: 'To-do App',
    category: 'PRODUCTIVITY',
    description: 'Organize tasks with due dates and priorities. Edit, filter, complete, and clear tasks as your day moves along.',
    stack: ['React', 'JavaScript', 'CSS'],
    demo: 'https://its-gopika-git.github.io/to-do-app/',
    source: 'https://github.com/its-gopika-git/to-do-app',
  },
  {
    name: 'Photo Cards',
    category: 'VISUAL DESIGN',
    description: 'A mobile photography gallery with image captions, locations, and map links for each shot.',
    stack: ['React', 'CSS', 'Photography'],
    demo: 'https://its-gopika-git.github.io/photo-cards/',
    source: 'https://github.com/its-gopika-git/photo-cards',
  },
]

const skillGroups = [
  ['Frontend', 'React.js, Hooks, Context API, Redux, JavaScript ES6+, HTML5, CSS3, SCSS'],
  ['UI & accessibility', 'Material-UI, React-Bootstrap, ag-Grid, responsive design, accessibility'],
  ['Backend & data', 'Java, Spring Boot, REST APIs, SQL, MySQL, PostgreSQL'],
  ['Testing & delivery', 'Jest, React Testing Library, Enzyme, SonarQube, Git, CI/CD, Agile/Scrum'],
  ['Security & tools', 'Okta, RBAC, Postman, VS Code, Figma'],
]

function ProjectCard({ project, index }) {
  return (
    <article className={`project-card ${project.featured ? 'project-card-featured' : ''}`}>
      <a className="project-preview" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live demo`}>
        <iframe
          src={project.demo}
          title={`${project.name} live preview`}
          loading={index === 0 ? 'eager' : 'lazy'}
          tabIndex={-1}
        />
        <span className="preview-open"><ArrowUpRight size={17} /></span>
      </a>
      <div className="project-copy">
        <div className="project-title-row">
          <div>
            <p className="project-category">{project.category}</p>
            <h3>{project.name}</h3>
          </div>
          <a className="icon-link" href={project.source} target="_blank" rel="noreferrer" aria-label={`View ${project.name} source on GitHub`}>
            <Github size={18} />
          </a>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-bottom-row">
          <ul className="tag-list" aria-label="Technologies">
            {project.stack.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </article>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Gopika, home"><span>g</span>.</a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">FRONTEND DEVELOPER <span className="eyebrow-divider">/</span> CHENNAI, INDIA</p>
            <h1>Thoughtful interfaces.<br /><span>Built to work.</span></h1>
            <p className="hero-intro">I’m Gopika, a React.js developer who turns complex workflows into clear, dependable experiences. I care about the details that make software feel effortless.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowDown size={16} /></a>
              <a className="button button-quiet" href="mailto:gopika.31g@gmail.com"><Mail size={16} /> Get in touch</a>
            </div>
          </div>
          <div className="hero-art" aria-label="Career highlights">
            <div className="art-topline"><span>THE WORK, IN NUMBERS</span><span>01 — 03</span></div>
            <div className="metric metric-primary"><strong>5<span>k</span><sup>+</sup></strong><p>people supported<br />by the products I build</p></div>
            <div className="art-rule" />
            <div className="metric-row">
              <div className="metric"><strong>30<span>%</span></strong><p>faster data<br />processing</p></div>
              <div className="metric"><strong>90<span>%</span><sup>+</sup></strong><p>test coverage<br />maintained</p></div>
            </div>
            <div className="art-stamp">REACT<br />DEVELOPER<br /><span>since 2021</span></div>
            <span className="art-spark" aria-hidden="true">✳</span>
          </div>
          <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div><p className="eyebrow">SELECTED PROJECTS <span className="eyebrow-divider">/</span> 05</p><h2>Made with care<span>.</span></h2></div>
            <p className="section-note">A few things I’ve been building<br />outside the day job.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-inner">
            <div className="about-heading">
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>Strong foundations.<br /><span>Always learning.</span></h2>
              <p className="about-summary">For 5+ years at Tata Consultancy Services, I’ve helped deliver enterprise React applications for CNA Insurance. Now I’m growing my full-stack toolkit with Java, Spring Boot, and SQL.</p>
              <a className="text-link about-github" href="https://github.com/its-gopika-git" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16} /></a>
            </div>
            <div className="experience-block">
              <p className="eyebrow">EXPERIENCE</p>
              <div className="experience-entry">
                <div className="experience-date">MAR 2021 — PRESENT</div>
                <div>
                  <h3>System Engineer <span>/ React.js Developer</span></h3>
                  <p className="experience-company">Tata Consultancy Services · Chennai</p>
                  <p className="experience-client">Client: CNA Insurance · Chicago</p>
                  <ul className="experience-list">
                    <li>Built reusable React, Redux, Material UI, and ag-Grid components, reducing development time by 25%.</li>
                    <li>Optimized grid filtering and pagination to improve data processing speed by 30%.</li>
                    <li>Delivered secure insurance workflows for 5,000+ users with Okta authentication and role-based access.</li>
                    <li>Maintained 90%+ test coverage and partnered across teams on REST API integrations, accessibility, and CI/CD.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="details-section section-wrap">
          <div className="details-column skills-column">
            <p className="eyebrow">TOOLKIT</p>
            <h2>What I work with</h2>
            <dl className="skill-list">
              {skillGroups.map(([label, value]) => <div className="skill-row" key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
          </div>
          <div className="details-column">
            <p className="eyebrow">BEYOND THE CODE</p>
            <h2>Learning & milestones</h2>
            <div className="detail-group">
              <h3>Education</h3>
              <p className="detail-strong">B.E. Electronics & Communication Engineering</p>
              <p>Kamaraj College of Engineering and Technology · 2015–2019</p>
              <p>Anna University · CGPA 7.7</p>
            </div>
            <div className="detail-group">
              <h3>Certifications</h3>
              <p>Complete React JS Front-End Development (React 19) with AI · Dr. Vipin Kumar, Udemy</p>
              <p>Complete UI/UX Design Course 2026: Figma + AI + Real Project · Muhammad Iqbal, Udemy</p>
            </div>
            <div className="detail-group">
              <h3>Recognition & languages</h3>
              <p>Recognized at TCS for Best Team, Star of the Month, Service & Commitment, and On the Spot.</p>
              <p>Tamil (native) · Hindi (conversational) · English (fluent)</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div><p className="eyebrow">HAVE A GOOD PROJECT IN MIND?</p><h2>Let’s make it<br /><span>work beautifully.</span></h2></div>
            <div className="contact-actions">
              <a className="contact-email" href="mailto:gopika.31g@gmail.com">gopika.31g@gmail.com <ArrowUpRight size={18} /></a>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/its-gopika" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
                <a href="https://github.com/its-gopika-git" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
                <a href="tel:+919384027219">+91 93840 27219</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a className="wordmark" href="#home" aria-label="Back to top"><span>g</span>.</a><p>Designed & built by Gopika · 2026</p><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </>
  )
}

export default App