import "./Services.css";
import serviceImage from "../assets/images/home.jpg";
import {
  FaArrowRight,
  FaBullhorn,
  FaCheckCircle,
  FaCloud,
  FaCode,
  FaDatabase,
  FaGraduationCap,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
  FaSearch,
  FaServer,
  FaShieldAlt,
  FaShoppingCart,
  FaUsersCog,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    text: "Fast, responsive, SEO-friendly websites for startups, brands, institutions, and local businesses.",
    points: ["Business website", "Landing pages", "Portfolio sites", "Admin panels"],
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    text: "Mobile and web apps with clean UI, strong backend flow, secure login, and scalable features.",
    points: ["Android apps", "Web apps", "API integration", "User dashboards"],
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    text: "Growth campaigns that improve brand visibility, lead generation, social reach, and online trust.",
    points: ["SEO strategy", "Social media", "Paid ads", "Lead campaigns"],
  },
  {
    icon: <FaPaintBrush />,
    title: "Web & UI Design",
    text: "Modern visual design, claymorphism UI, wireframes, brand colors, and user-friendly page layouts.",
    points: ["UI/UX design", "Wireframes", "Brand visuals", "Responsive layouts"],
  },
  {
    icon: <FaGraduationCap />,
    title: "Internship Programs",
    text: "Practical training for students with live tasks, real project workflow, guidance, and portfolio support.",
    points: ["Live projects", "Mentor support", "Certificates", "Career guidance"],
  },
  {
    icon: <FaCloud />,
    title: "Domain & Hosting",
    text: "Reliable setup for domains, hosting, SSL, email, deployment, maintenance, and technical support.",
    points: ["Domain setup", "Hosting", "SSL security", "Maintenance"],
  },
];

const workflow = [
  "Requirement discussion",
  "UI plan and project roadmap",
  "Development and testing",
  "Launch, support, and growth",
];

const bundles = [
  {
    title: "Startup Launch",
    text: "Website, basic branding, contact flow, hosting guidance, and launch support.",
  },
  {
    title: "Business Growth",
    text: "Website or app, SEO setup, social media strategy, lead funnel, and maintenance support.",
  },
  {
    title: "Student Project",
    text: "Training, project planning, development guidance, documentation, and presentation support.",
  },
];

const industries = [
  "Education",
  "Retail",
  "Healthcare",
  "Real Estate",
  "Local Business",
  "Startups",
  "Personal Brands",
  "Institutions",
];

function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero-glow services-glow-one"></div>
        <div className="services-hero-glow services-glow-two"></div>

        <div className="container services-hero-grid">
          <div className="services-hero-copy">
            <span className="services-eyebrow">Our Services</span>
            <h1>Complete IT solutions for business growth and student success.</h1>
            <p>
              App Vortex Solution helps you plan, design, develop, launch, and grow your digital presence with
              practical services built for real-world results.
            </p>
            <div className="services-hero-actions">
              <a href="/contact" className="services-primary-btn">
                Start a Project <FaArrowRight />
              </a>
              <a href="/about" className="services-secondary-btn">
                Know Our Team
              </a>
            </div>
          </div>

          <div className="services-hero-visual">
            <img src={serviceImage} alt="Digital service planning workspace" />
            <div className="service-floating-card">
              <FaRocket />
              <div>
                <strong>Launch Ready</strong>
                <span>Design + Development + Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-intro section-space">
        <div className="container intro-grid">
          <div className="intro-card">
            <FaLaptopCode />
            <h2>We do more than build pages.</h2>
            <p>
              Every service is planned around your goal: more enquiries, better presentation, smoother operations,
              stronger learning, or a complete digital launch.
            </p>
          </div>

          <div className="intro-list">
            <div><FaCheckCircle /> Clear project planning before development</div>
            <div><FaCheckCircle /> Responsive design for mobile, tablet, and desktop</div>
            <div><FaCheckCircle /> Support for content, SEO, hosting, and updates</div>
            <div><FaCheckCircle /> Practical training and real project guidance</div>
          </div>
        </div>
      </section>

      <section className="services-catalog section-space">
        <div className="container">
          <div className="services-section-heading text-center">
            <span className="services-eyebrow">What we provide</span>
            <h2>Services made for modern digital projects</h2>
            <p>Choose one service or combine multiple services into a complete project package.</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article className={`service-card service-card-${index + 1}`} key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}><FaCheckCircle /> {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow-section section-space">
        <div className="container workflow-grid">
          <div className="workflow-copy">
            <span className="services-eyebrow">How we work</span>
            <h2>Simple workflow, clean delivery</h2>
            <p>
              We keep project communication clear from the first discussion to final launch, so you always know the
              current stage and next action.
            </p>
          </div>

          <div className="workflow-list">
            {workflow.map((step, index) => (
              <div className="workflow-item" key={step}>
                <span>{`0${index + 1}`}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bundles section-space">
        <div className="container">
          <div className="services-section-heading text-center">
            <span className="services-eyebrow">Project bundles</span>
            <h2>Pick the path that matches your need</h2>
          </div>

          <div className="bundle-grid">
            {bundles.map((bundle) => (
              <article className="bundle-card" key={bundle.title}>
                <h3>{bundle.title}</h3>
                <p>{bundle.text}</p>
                <a href="/contact">
                  Enquire Now <FaArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-support section-space">
        <div className="container tech-grid">
          <div className="tech-panel">
            <FaDatabase />
            <h2>Support for complete systems</h2>
            <p>
              We can connect frontend, backend, database, hosting, analytics, SEO, admin panels, and maintenance into
              one practical project flow.
            </p>
          </div>

          <div className="tech-list">
            <div><FaServer /> Backend and API setup</div>
            <div><FaShieldAlt /> SSL and security basics</div>
            <div><FaSearch /> SEO-ready structure</div>
            <div><FaShoppingCart /> E-commerce support</div>
            <div><FaUsersCog /> CRM and admin workflows</div>
          </div>
        </div>
      </section>

      <section className="industries section-space">
        <div className="container">
          <div className="services-section-heading text-center">
            <span className="services-eyebrow">Who we help</span>
            <h2>Solutions for many industries</h2>
          </div>

          <div className="industry-cloud">
            {industries.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container text-center">
          <span className="services-eyebrow">Ready to begin?</span>
          <h2>Tell us what you want to build. We will shape the service plan.</h2>
          <p>
            Whether it is a website, app, marketing campaign, hosting setup, or internship project, we can help you
            start with clarity.
          </p>
          <a href="/contact" className="services-primary-btn">
            Contact Now <FaArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Services;
