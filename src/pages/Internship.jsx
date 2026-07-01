import "./Internship.css";
import {
  FaArrowRight,
  FaBriefcase,
  FaBullhorn,
  FaCertificate,
  FaCheckCircle,
  FaCode,
  FaFileAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaMobileAlt,
  FaProjectDiagram,
  FaRocket,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";

const programs = [
  {
    icon: <FaCode />,
    title: "Web Development",
    text: "Learn HTML, CSS, JavaScript, React, responsive layouts, API usage, and deployment basics.",
    skills: ["React UI", "Responsive CSS", "Git workflow", "Live website"],
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    text: "Build app screens, understand user flow, connect APIs, and practice feature-based development.",
    skills: ["App UI", "User flow", "API basics", "Project build"],
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    text: "Practice SEO, social media planning, paid ad basics, content strategy, and lead generation.",
    skills: ["SEO", "Social media", "Ads basics", "Reports"],
  },
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Basics",
    text: "Understand frontend, backend, database flow, dashboards, authentication, and deployment planning.",
    skills: ["Frontend", "Backend", "Database", "Dashboard"],
  },
];

const benefits = [
  { icon: <FaProjectDiagram />, title: "Live Projects", text: "Practice with real project tasks and structured weekly output." },
  { icon: <FaCertificate />, title: "Certificate", text: "Complete the program with certificate and project proof." },
  { icon: <FaUserTie />, title: "Mentor Guidance", text: "Get practical guidance from project-focused mentors." },
  { icon: <FaBriefcase />, title: "Career Support", text: "Improve portfolio, resume confidence, and interview readiness." },
];

const steps = [
  "Choose your internship track",
  "Attend guided practical sessions",
  "Work on real-time project tasks",
  "Submit, review, improve, and complete",
];

const outcomes = [
  "Portfolio-ready project",
  "Practical workflow knowledge",
  "UI and development confidence",
  "Team communication basics",
  "Documentation and presentation support",
  "Certificate after completion",
];

function Internship() {
  return (
    <main className="internship-page">
      <section className="intern-hero">
        <div className="intern-glow intern-glow-one"></div>
        <div className="intern-glow intern-glow-two"></div>

        <div className="container intern-hero-grid">
          <div className="intern-hero-copy">
            <span className="intern-eyebrow">Internship Programs</span>
            <h1>Learn by building real projects with mentor support.</h1>
            <p>
              App Vortex Solution internship programs help students gain practical skills in web development, app
              development, full stack basics, and digital marketing through guided live project work.
            </p>
            <div className="intern-hero-actions">
              <a href="#apply" className="intern-primary-btn">
                Apply Now <FaArrowRight />
              </a>
              <a href="#programs" className="intern-secondary-btn">
                View Tracks
              </a>
            </div>
          </div>

          <div className="intern-hero-card">
            <div className="intern-card-top">
              <FaGraduationCap />
              <span>Practical Training</span>
            </div>
            <h2>Build skills that feel useful outside the classroom.</h2>
            <div className="intern-card-list">
              <p><FaCheckCircle /> Real-time project workflow</p>
              <p><FaCheckCircle /> Mentor review and improvement</p>
              <p><FaCheckCircle /> Certificate and portfolio support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="intern-stats">
        <div className="container intern-stats-grid">
          <div><strong>4+</strong><span>Training Tracks</span></div>
          <div><strong>350+</strong><span>Students Guided</span></div>
          <div><strong>Live</strong><span>Project Practice</span></div>
          <div><strong>Mentor</strong><span>Review Support</span></div>
        </div>
      </section>

      <section id="programs" className="intern-programs section-space">
        <div className="container">
          <div className="intern-section-heading text-center">
            <span className="intern-eyebrow">Available Programs</span>
            <h2>Choose the track that fits your goal</h2>
            <p>Each program focuses on practical skill-building, project confidence, and guided improvement.</p>
          </div>

          <div className="program-grid">
            {programs.map((program) => (
              <article className="program-card" key={program.title}>
                <div className="program-icon">{program.icon}</div>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <div className="skill-tags">
                  {program.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="intern-outcomes section-space">
        <div className="container outcomes-grid">
          <div className="outcomes-copy">
            <span className="intern-eyebrow">What you gain</span>
            <h2>Internship output you can show with confidence.</h2>
            <p>
              The goal is not only learning concepts. You will practice how projects are planned, built, improved,
              documented, and presented.
            </p>
          </div>

          <div className="outcomes-list">
            {outcomes.map((item) => (
              <div key={item}><FaCheckCircle /> {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="intern-benefits section-space">
        <div className="container">
          <div className="intern-section-heading text-center">
            <span className="intern-eyebrow">Why join us</span>
            <h2>Training designed for real practice</h2>
          </div>

          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.title}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="intern-process section-space">
        <div className="container process-grid">
          <div className="process-copy">
            <span className="intern-eyebrow">Training process</span>
            <h2>Simple steps from joining to completion</h2>
            <p>We keep your learning path clear so you understand what to do each week and how to improve.</p>
          </div>

          <div className="process-list">
            {steps.map((step, index) => (
              <div className="process-item" key={step}>
                <span>{`0${index + 1}`}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-lab section-space">
        <div className="container lab-grid">
          <div className="lab-panel">
            <FaRocket />
            <h2>Project Lab</h2>
            <p>
              Students can work on websites, app screens, digital marketing campaigns, dashboards, college project
              ideas, and portfolio-ready modules.
            </p>
          </div>

          <div className="lab-list">
            <div><FaFileAlt /> Documentation support</div>
            <div><FaUsers /> Team-style task practice</div>
            <div><FaProjectDiagram /> Mini and major project guidance</div>
            <div><FaBriefcase /> Portfolio improvement support</div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Internship;
