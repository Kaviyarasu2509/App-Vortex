import "./Home.css";
import bgImage from "../assets/images/home.jpg";
import { useEffect, useState } from "react";

function Home() {

  // COUNTER
  const [count, setCount] = useState({
    projects: 0,
    clients: 0,
    students: 0,
    experience: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => ({
        projects: prev.projects < 100 ? prev.projects + 1 : 100,
        clients: prev.clients < 50 ? prev.clients + 1 : 50,
        students: prev.students < 200 ? prev.students + 2 : 200,
        experience: prev.experience < 3 ? prev.experience + 1 : 3
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="container text-center">

          <h1 className="hero-title">
            APP VORTEX SOLUTION
          </h1>

          <p className="hero-text">
            We provide Web Development, App Development & Digital Marketing services to grow your business.
          </p>

          <p className="hero-subtext">
            Helping startups, students, and businesses to build powerful digital presence with modern technology solutions.
          </p>

          <div className="hero-buttons">
            <a href="/contact" className="btn btn-primary-custom">Get Started</a>
            <a href="/services" className="btn btn-outline-custom">Our Services</a>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="container text-center">
          <h2 className="section-title">Our Services</h2>

          <p className="section-desc">
            We offer a wide range of IT services designed to help your business grow in the digital world.
          </p>

          <div className="row mt-4">

            <div className="col-md-4">
              <div className="service-card">
                <h5>Web Development</h5>
                <p>
                  We create responsive, fast, and SEO-friendly websites using modern technologies to improve your business visibility online.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-card">
                <h5>App Development</h5>
                <p>
                  Our team builds scalable mobile and web applications with user-friendly interfaces and powerful backend systems.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-card">
                <h5>Digital Marketing</h5>
                <p>
                  We provide SEO, social media marketing, and paid advertising strategies to increase your brand reach and generate leads.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COUNTER */}
      <section className="counter text-center">
        <div className="container">
          <div className="row">

            <div className="col-md-3">
              <h2>{count.projects}+</h2>
              <p>Projects Completed</p>
            </div>

            <div className="col-md-3">
              <h2>{count.clients}+</h2>
              <p>Happy Clients</p>
            </div>

            <div className="col-md-3">
              <h2>{count.students}+</h2>
              <p>Students Trained</p>
            </div>

            <div className="col-md-3">
              <h2>{count.experience}+</h2>
              <p>Years Experience</p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why">
        <div className="container text-center">
          <h2 className="section-title">Why Choose Us</h2>

          <p className="section-desc">
            We are committed to delivering high-quality solutions with customer satisfaction and innovation.
          </p>

          <div className="row mt-4">
            <div className="col-md-3"><div className="why-box">ISO Certified Quality Services</div></div>
            <div className="col-md-3"><div className="why-box">Affordable Pricing for All</div></div>
            <div className="col-md-3"><div className="why-box">Expert Developers Team</div></div>
            <div className="col-md-3"><div className="why-box">24/7 Customer Support</div></div>
          </div>
        </div>
      </section>

      {/* EXTRA CONTENT */}
      <section className="extra">
        <div className="container text-center">
          <h2 className="section-title">Our Commitment</h2>

          <p>
            At App Vortex Solution, we believe in delivering excellence through innovation and technology. 
            Our goal is to help businesses grow faster by providing reliable and scalable IT solutions.
          </p>

          <p>
            We focus on quality, performance, and customer satisfaction. Our team ensures every project 
            is delivered on time with the best standards.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta text-center">
        <h2>Ready to Grow Your Business?</h2>

        <p>
          Let’s work together to build innovative digital solutions and take your business to the next level.
        </p>

        <a href="/contact" className="btn btn-primary-custom mt-3">
          Contact Now
        </a>
      </section>

    </div>
  );
}

export default Home;