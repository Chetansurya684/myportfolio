import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out!');
    e.target.reset();
  };

  return (
    <>
      <header>
        <div className="container">
          <h1>Chetan's Portfolio</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="text">
            <h1>Hi, I'm Chetan Suryawanshi</h1>
            <p>Frontend Developer | UI/UX Enthusiast | Lifelong Learner</p>
            <br />
            
          </div>
          <div className="image">
          <img src="https://avatars.githubusercontent.com/u/182239628?v=4" alt="Chetan Suryawanshi" />

          </div>
        </div>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>Hello, My name is Chetan Suryawanshi I am Currently Pursuing Computer Engineering At RCPIT Shirpur in 2nd year and I am a passionate web developer who loves building modern and responsive web apps using HTML, CSS, and JavaScript. I enjoy solving problems and continuously learning new technologies.</p>
        <div className="social-links">
          <p>Follow me:
            <a href="https://www.linkedin.com/in/chetan-suryawanshi-a511b7329/" target="_blank" rel="noreferrer">Linkedin</a> |
            <a href="https://github.com/Chetansurya684" target="_blank" rel="noreferrer">Github</a>
          </p>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Markplace</h3>
            <p>A modern e-commerce platform built with HTML, CSS, and JavaScript.</p><br />
            <a href="https://github.com/Chetansurya684/Web-Development.git" className="btn primary" target="_blank" rel="noreferrer">View Project</a>
          </div>
          
          <div className="project">
            <h3>Akatsuki Project Hub</h3>
            <p>This is a React-based project using Tailwind CSS, a project selling website for college students.</p><br />
            <a href="https://my-first-project-six-delta.vercel.app/" className="btn primary" target="_blank" rel="noreferrer">View Project</a>
          </div>
        
          <div className="project">
          <h3>QuizMaker</h3>
            <p>It is QuizMaker for Online Exams fully Based on the Python Language.</p><br /><br />
            <a href="https://github.com/Chetansurya684/Quizmaker.py.git" className="btn primary" target="_blank" rel="noreferrer">View Project</a>
          </div>
          </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React (Basics)</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2025 Chetan Suryawanshi. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
