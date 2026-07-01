import "./Home.css";
import aboutImage from "../assets/images/about.jpg";
import Lightfall from "../components/Lightfall";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBullhorn,
  FaChartLine,
  FaCheckCircle,
  FaCloud,
  FaCode,
  FaGraduationCap,
  FaLayerGroup,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    text: "Responsive websites, business portals, landing pages, dashboards, and SEO-ready company profiles.",
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    text: "Android, iOS, and cross-platform apps with smooth UI, secure APIs, admin panels, and scalable flows.",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    text: "SEO, social media campaigns, paid ads, content planning, and lead generation strategy for steady growth.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    text: "Modern claymorphism interfaces, wireframes, brand systems, prototypes, and conversion-focused screens.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Internship Training",
    text: "Hands-on web, app, and digital marketing training with live tasks, mentorship, and project guidance.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & Hosting",
    text: "Deployment, domain setup, hosting, maintenance, speed optimization, and production support.",
  },
];

const processSteps = [
  "Discovery and business goal mapping",
  "Wireframe, UI design, and prototype",
  "Development with weekly progress reviews",
  "Testing, launch, support, and growth tracking",
];

const highlights = [
  "Startup websites",
  "E-commerce apps",
  "CRM dashboards",
  "College projects",
  "Portfolio sites",
  "Social media growth",
  "SEO campaigns",
  "Cloud deployment",
];

const testimonials = [
  {
    name: "Startup Founder",
    role: "Retail Brand",
    quote:
      "The team converted our idea into a clean app and website. The design felt premium and the launch support was very useful.",
  },
  {
    name: "Final Year Student",
    role: "Internship Program",
    quote:
      "Training was practical from day one. I built a real project, improved my confidence, and understood client-style workflow.",
  },
  {
    name: "Local Business Owner",
    role: "Digital Growth",
    quote:
      "Their marketing and website changes helped us get more enquiries. The reports were simple and easy to understand.",
  },
];

const lightfallColors = ["#8fe86b", "#32d4e8", "#f5fbff"];

function Home() {
  const [count, setCount] = useState({
    projects: 0,
    clients: 0,
    students: 0,
    experience: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        projects: prev.projects < 120 ? prev.projects + 2 : 120,
        clients: prev.clients < 65 ? prev.clients + 1 : 65,
        students: prev.students < 350 ? prev.students + 5 : 350,
        experience: prev.experience < 5 ? prev.experience + 1 : 5,
      }));
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home-page">
      <section className="hero clay-hero">
        <div className="lightfall-layer">
          <Lightfall
            colors={lightfallColors}
            backgroundColor="#102033"
            speed={0.72}
            streakCount={5}
            streakWidth={0.8}
            streakLength={1.4}
            glow={0.85}
            density={0.72}
            twinkle={0.85}
            zoom={2.7}
            backgroundGlow={0.35}
            opacity={0.58}
            mouseInteraction={true}
            mouseStrength={0.45}
            mouseRadius={0.75}
            dpr={1}
            mixBlendMode="screen"
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-orbit hero-orbit-one"></div>
        <div className="hero-orbit hero-orbit-two"></div>

        <div className="container hero-grid">
          <div className="hero-copy reveal-up">
            <span className="eyebrow">App Vortex Solution</span>
            <h1 className="hero-title">
              Build your business with modern apps, websites, and digital growth.
            </h1>
            <p className="hero-text">
              We create premium digital products for startups, students, and growing businesses with strong design,
              clean development, marketing strategy, and long-term support.
            </p>

            <div className="hero-buttons">
              <a href="/contact" className="btn-primary-custom">
                Start a Project <FaArrowRight />
              </a>
              <a href="/services" className="btn-outline-custom">
                Explore Services
              </a>
            </div>

            <div className="hero-badges">
              <span>Web</span>
              <span>Mobile App</span>
              <span>Marketing</span>
              <span>Internship</span>
            </div>
          </div>
        </div>
      </section>

      <section className="counter clay-band">
        <div className="container counter-grid">
          <div className="counter-card reveal-up">
            <h2>{count.projects}+</h2>
            <p>Projects Completed</p>
          </div>
          <div className="counter-card reveal-up delay-1">
            <h2>{count.clients}+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="counter-card reveal-up delay-2">
            <h2>{count.students}+</h2>
            <p>Students Trained</p>
          </div>
          <div className="counter-card reveal-up delay-3">
            <h2>{count.experience}+</h2>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      <section className="services section-space">
        <div className="container">
          <div className="section-heading text-center reveal-up">
            <span className="eyebrow">What we do</span>
            <h2>Complete digital solution for a bigger project vision</h2>
            <p>
              From idea planning to launch and growth, every service is shaped to help your brand look professional
              and perform better online.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className={`service-card reveal-up delay-${index % 4}`} key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="/services">
                  Learn more <FaArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase section-space">
        <div className="container showcase-grid">
          <div className="showcase-image reveal-left">
            <img src={aboutImage} alt="Team planning digital project" />
            <div className="image-chip">
              <FaUsers /> Strategy + Design + Development
            </div>
          </div>

          <div className="showcase-copy reveal-right">
            <span className="eyebrow">Claymorphism UI</span>
            <h2>Soft, clean, premium interfaces that make your brand feel modern.</h2>
            <p>
              We combine soft shadows, rounded surfaces, glass layers, smooth animation, and clear content flow so
              your website feels fresh and professional on every screen.
            </p>

            <div className="feature-list">
              <div><FaCheckCircle /> Responsive mobile-first layouts</div>
              <div><FaCheckCircle /> Premium landing pages and dashboards</div>
              <div><FaCheckCircle /> Fast loading, SEO-friendly structure</div>
              <div><FaCheckCircle /> Support after launch and updates</div>
            </div>
          </div>
        </div>
      </section>

      <section className="process section-space">
        <div className="container">
          <div className="section-heading text-center reveal-up">
            <span className="eyebrow">How we work</span>
            <h2>Simple process, professional delivery</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div className={`process-card reveal-up delay-${index}`} key={step}>
                <span>{`0${index + 1}`}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="growth-lab section-space">
        <div className="container lab-grid">
          <div className="lab-copy reveal-left">
            <span className="eyebrow">Growth Lab</span>
            <h2>More than development: we help you plan, launch, and grow.</h2>
            <p>
              Need a big project? We can build your company website, mobile app, admin dashboard, branding support,
              marketing funnel, and student training content as one connected system.
            </p>

            <div className="highlight-cloud">
              {highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="lab-preview reveal-right">
            <div className="preview-card preview-main">
              <FaLayerGroup />
              <h3>Project Stack</h3>
              <p>Frontend, backend, dashboard, hosting, analytics, and marketing support.</p>
            </div>
            <div className="system-orbit">
              <span>UI</span>
              <span>API</span>
              <span>SEO</span>
              <span>CRM</span>
            </div>
            <div className="preview-card preview-search">
              <FaSearch />
              <h3>SEO Ready</h3>
              <p>Built for visibility, speed, and better enquiry conversion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why section-space">
        <div className="container">
          <div className="section-heading text-center reveal-up">
            <span className="eyebrow">Why choose us</span>
            <h2>Reliable team for business owners and learners</h2>
            <p>
              We focus on clear communication, polished design, affordable packages, and practical project execution.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-box reveal-up"><FaRocket /> Fast Project Kickoff</div>
            <div className="why-box reveal-up delay-1"><FaShieldAlt /> Quality & Security Focus</div>
            <div className="why-box reveal-up delay-2"><FaUsers /> Friendly Support Team</div>
            <div className="why-box reveal-up delay-3"><FaChartLine /> Growth-Oriented Strategy</div>
          </div>
        </div>
      </section>

      <section className="testimonials section-space">
        <div className="container">
          <div className="section-heading text-center reveal-up">
            <span className="eyebrow">Client voices</span>
            <h2>Built with trust, clarity, and consistent progress</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <article className={`testimonial-card reveal-up delay-${index}`} key={item.name}>
                <p>"{item.quote}"</p>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq section-space">
        <div className="container faq-grid">
          <div className="faq-title reveal-left">
            <span className="eyebrow">Project clarity</span>
            <h2>Common questions before starting</h2>
          </div>
          <div className="faq-list reveal-right">
            <details open>
              <summary>Can you handle a complete business project?</summary>
              <p>Yes. We can plan the website, app, admin panel, hosting, SEO setup, and launch support together.</p>
            </details>
            <details>
              <summary>Do you support students and internships?</summary>
              <p>Yes. We provide practical internship training with live project tasks and mentor guidance.</p>
            </details>
            <details>
              <summary>Can the design be customized?</summary>
              <p>Yes. The UI can be shaped for your brand, industry, colors, content, and required pages.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta text-center">
        <div className="container reveal-up">
          <span className="eyebrow">Ready to grow?</span>
          <h2>Let us build your next big digital project.</h2>
          <p>
            Share your idea with App Vortex Solution and we will help you convert it into a powerful website,
            mobile app, or digital growth system.
          </p>
          <a href="/contact" className="btn-primary-custom">
            Contact Now <FaArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
