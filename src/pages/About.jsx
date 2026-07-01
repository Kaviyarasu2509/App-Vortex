import "./About.css";
import banner from "../assets/images/about_banner.jpg";
import {
  FaArrowRight,
  FaAward,
  FaBullseye,
  FaCheckCircle,
  FaCloud,
  FaCode,
  FaHandshake,
  FaLightbulb,
  FaMobileAlt,
  FaRocket,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const stats = [
  { value: "2024", label: "Established" },
  { value: "120+", label: "Projects Planned" },
  { value: "350+", label: "Students Trained" },
  { value: "24/7", label: "Support Mindset" },
];

const values = [
  {
    icon: <FaShieldAlt />,
    title: "Quality First",
    text: "We keep every project focused on reliability, performance, and clean delivery.",
  },
  {
    icon: <FaLightbulb />,
    title: "Creative Thinking",
    text: "We turn business ideas into modern digital experiences with practical design choices.",
  },
  {
    icon: <FaHandshake />,
    title: "Long-Term Support",
    text: "We stay connected after launch with updates, guidance, and growth-focused improvements.",
  },
  {
    icon: <FaUsers />,
    title: "Student Empowerment",
    text: "We train learners through real tasks, project practice, and industry-style workflows.",
  },
];

const capabilities = [
  { icon: <FaCode />, label: "Web Development" },
  { icon: <FaMobileAlt />, label: "App Development" },
  { icon: <FaBullseye />, label: "Digital Marketing" },
  { icon: <FaCloud />, label: "Domain & Hosting" },
];

const timeline = [
  "Understand your business, audience, and project goals",
  "Design the user flow, visual direction, and content structure",
  "Build, test, optimize, and prepare the product for launch",
  "Support growth with updates, marketing, hosting, and guidance",
];

function About() {
  return (
    <main className="about-page">
      <section className="about-hero" style={{ backgroundImage: `url(${banner})` }}>
        <div className="about-hero-overlay"></div>
        <div className="about-glow about-glow-one"></div>
        <div className="about-glow about-glow-two"></div>

        <div className="container about-hero-grid">
          <div className="about-hero-copy">
            <span className="about-eyebrow">About App Vortex Solution</span>
            <h1>We build digital products that help people grow with confidence.</h1>
            <p>
              App Vortex Solution is an innovative IT service company delivering websites, apps, digital marketing,
              internships, and hosting support for startups, students, and growing businesses.
            </p>
            <div className="about-hero-actions">
              <a href="/services" className="about-primary-btn">
                Explore Services <FaArrowRight />
              </a>
              <a href="/contact" className="about-secondary-btn">
                Talk to Us
              </a>
            </div>
          </div>

          <div className="about-hero-card">
            <div className="hero-card-top">
              <FaAward />
              <span>ISO 9001:2008 Certified</span>
            </div>
            <h2>Digital solutions with quality, clarity, and practical execution.</h2>
            <div className="hero-card-list">
              <p><FaCheckCircle /> Business websites and landing pages</p>
              <p><FaCheckCircle /> Mobile apps and admin dashboards</p>
              <p><FaCheckCircle /> Training, branding, marketing, and hosting</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container stats-grid">
          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-story section-pad">
        <div className="container story-grid">
          <div className="story-image">
            <img src={banner} alt="App Vortex team working on a digital project" />
            <div className="story-chip">
              <FaRocket /> Ideas to Launch
            </div>
          </div>

          <div className="story-copy">
            <span className="about-eyebrow">Who we are</span>
            <h2>A young, focused team creating useful digital growth systems.</h2>
            <p>
              Established in 2024, App Vortex Solution is dedicated to delivering high-quality digital services with a
              strong focus on reliability, user experience, customer satisfaction, and long-term business value.
            </p>
            <p>
              We specialize in end-to-end technology support including web development, mobile app development, web
              design, digital marketing, internship programs, domain setup, hosting, and maintenance.
            </p>
            <p>
              Our team combines development, design, and strategy so every project feels professional, performs well,
              and supports the client after launch.
            </p>
          </div>
        </div>
      </section>

      <section className="vision-mission section-pad">
        <div className="container vm-grid">
          <article className="card-box">
            <div className="card-icon"><FaBullseye /></div>
            <h3>Our Vision</h3>
            <p>
              To become a trusted IT solutions provider by delivering innovative, reliable, and affordable digital
              services that empower businesses and individuals to succeed online.
            </p>
          </article>

          <article className="card-box">
            <div className="card-icon"><FaRocket /></div>
            <h3>Our Mission</h3>
            <p>
              To provide cost-effective IT solutions, support business growth through digital transformation, empower
              students with real-time skills, and maintain strong service standards.
            </p>
          </article>
        </div>
      </section>

      <section className="capabilities section-pad">
        <div className="container">
          <div className="about-section-heading text-center">
            <span className="about-eyebrow">What we deliver</span>
            <h2>Complete support for your digital journey</h2>
            <p>We connect strategy, design, development, marketing, and training into one clear project workflow.</p>
          </div>

          <div className="capability-grid">
            {capabilities.map((item) => (
              <div className="capability-card" key={item.label}>
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values section-pad">
        <div className="container">
          <div className="about-section-heading text-center">
            <span className="about-eyebrow">Why choose us</span>
            <h2>Built on trust, speed, and quality</h2>
          </div>

          <div className="values-grid">
            {values.map((item) => (
              <article className="value-card" key={item.title}>
                <div className="value-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-timeline section-pad">
        <div className="container timeline-grid">
          <div className="timeline-copy">
            <span className="about-eyebrow">Our workflow</span>
            <h2>Clear steps from idea to launch</h2>
            <p>
              We keep the process simple and transparent so clients always know what is happening and what comes next.
            </p>
          </div>

          <div className="timeline-list">
            {timeline.map((item, index) => (
              <div className="timeline-item" key={item}>
                <span>{`0${index + 1}`}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container text-center">
          <span className="about-eyebrow">Ready to build?</span>
          <h2>Let App Vortex Solution shape your next digital project.</h2>
          <p>Bring your idea, business goal, or student project. We will help you plan it clearly and launch it well.</p>
          <a href="/contact" className="about-primary-btn">
            Contact Now <FaArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;
