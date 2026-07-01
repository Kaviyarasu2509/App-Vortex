import "./Contact.css";
import {
  FaArrowRight,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRocket,
  FaWhatsapp,
} from "react-icons/fa";

const phoneNumber = "6369569637";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-glow contact-glow-one"></div>
        <div className="contact-glow contact-glow-two"></div>

        <div className="container contact-hero-grid">
          <div className="contact-hero-copy">
            <span className="contact-eyebrow">Contact App Vortex</span>
            <h1>Let us talk about your next digital project.</h1>
            <p>
              Need a website, app, marketing plan, internship guidance, or hosting support? Share your requirement and
              our team will help you plan the next step clearly.
            </p>
            <div className="contact-hero-actions">
              <a href={`tel:+91${phoneNumber}`} className="contact-primary-btn">
                Call Now <FaPhoneAlt />
              </a>
              <a href={`https://wa.me/91${phoneNumber}`} className="contact-secondary-btn">
                WhatsApp <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="contact-hero-card">
            <div className="hero-card-icon"><FaRocket /></div>
            <h2>Quick response for business and student enquiries.</h2>
            <p>Send your project idea, internship request, or service question. We will guide you with clarity.</p>
          </div>
        </div>
      </section>

      <section className="contact-details">
        <div className="container contact-grid">
          <article className="contact-box">
            <div className="contact-icon"><FaMapMarkerAlt /></div>
            <h3>Address</h3>
            <p>
              2nd Floor, Balaji Complex, 2nd St,<br />
              Opp. Anbu Mess, Cross Cut Road,<br />
              Gandhipuram, Coimbatore - 641012
            </p>
          </article>

          <article className="contact-box">
            <div className="contact-icon"><FaPhoneAlt /></div>
            <h3>Phone</h3>
            <p><a href={`tel:+91${phoneNumber}`}>+91 {phoneNumber}</a></p>
          </article>

          <article className="contact-box">
            <div className="contact-icon"><FaEnvelope /></div>
            <h3>Email</h3>
            <p><a href="mailto:info@appvortexsolution.in">info@appvortexsolution.in</a></p>
          </article>

          <article className="contact-box">
            <div className="contact-icon"><FaClock /></div>
            <h3>Working Hours</h3>
            <p>Monday to Saturday<br />10:00 AM - 7:00 PM</p>
          </article>
        </div>
      </section>

      <section className="contact-main">
        <div className="container contact-main-grid">
          <div className="map-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31327.841805276283!2d76.96062903836598!3d11.040109283887087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0522dd613eb2b77%3A0x82cffb337f1a4507!2sAppVortex%20Solution!5e0!3m2!1sen!2sin!4v1782895226769!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="App Vortex Solution Location"
            ></iframe>
          </div>

          <div className="contact-form-card">
            <span className="contact-eyebrow">Send message</span>
            <h2>Tell us what you need</h2>
            <p>Fill the form and we will get back to you for project, service, or internship support.</p>

            <form className="form-box">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <select defaultValue="">
                <option value="" disabled>Select Enquiry Type</option>
                <option>Website Development</option>
                <option>App Development</option>
                <option>Digital Marketing</option>
                <option>Internship Program</option>
                <option>Domain & Hosting</option>
              </select>
              <textarea placeholder="Your Message"></textarea>

              <button type="submit">
                Send Message <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
