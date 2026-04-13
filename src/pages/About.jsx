import "./About.css";
import banner from "../assets/images/about_banner.jpg";

function About() {
  return (
    <div>

      {/* BANNER */}
      <section
        className="about-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container text-center">
          <h1>About Us</h1>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="about-content">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>

          <p>
            App Vortex Solution is a dynamic and innovative IT service company established in 2024, dedicated to delivering high-quality digital solutions for businesses and individuals. As an ISO 9001:2008 certified company, we focus on maintaining international standards in quality, reliability, and customer satisfaction.
          </p>

          <p>
            We specialize in providing end-to-end technology services including Web Development, Digital Marketing, Mobile App Development, Web Design, Internship Programs, and Domain & Hosting Solutions. Our goal is to help startups, students, and enterprises build a strong digital presence and achieve growth in the competitive online market.
          </p>

          <p>
            With a passionate team of developers, designers, and digital strategists, we transform ideas into powerful digital products. We are committed to innovation, timely delivery, and long-term client relationships.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="vision-mission">
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <div className="card-box">
                <h3>Our Vision</h3>
                <p>
                  To become a leading global IT solutions provider by delivering innovative, reliable, and affordable digital services that empower businesses and individuals to succeed in the digital world.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-box">
                <h3>Our Mission</h3>
                <p>
                  Our mission is to provide high-quality and cost-effective IT solutions, support business growth through digital transformation, empower students with real-time skills, ensure customer satisfaction, and maintain global standards in service delivery.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-about">
        <div className="container text-center">
          <h2 className="section-title">Why Choose Us</h2>

          <div className="row mt-4">
            <div className="col-md-3"><div className="why-box">ISO Certified</div></div>
            <div className="col-md-3"><div className="why-box">Expert Team</div></div>
            <div className="col-md-3"><div className="why-box">Affordable Pricing</div></div>
            <div className="col-md-3"><div className="why-box">24/7 Support</div></div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;