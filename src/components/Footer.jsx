import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRocket,
  FaWhatsapp,
} from "react-icons/fa";

const phoneNumber = "6369569637";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>

      <div className="container">
        <div className="footer-cta">
          <div>
            <span>Ready to grow?</span>
            <h2>Let App Vortex Solution build your next digital move.</h2>
          </div>
          <Link to="/contact" className="footer-cta-btn">
            Start Project <FaArrowRight />
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <FaRocket />
            </div>
            <h3>App Vortex Solution</h3>
            <p>
              We provide web development, app development, digital marketing, internship programs, domain, hosting,
              and digital growth support for businesses and students.
            </p>
            <div className="footer-socials">
              <a href={`https://wa.me/91${phoneNumber}`} aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href={`tel:+91${phoneNumber}`} aria-label="Call">
                <FaPhoneAlt />
              </a>
              <a href="mailto:info@appvortexsolution.in" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/internship">Internship</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">App Development</Link></li>
              <li><Link to="/services">Digital Marketing</Link></li>
              <li><Link to="/services">Domain & Hosting</Link></li>
              <li><Link to="/internship">Internship Training</Link></li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h4>Contact</h4>
            <p><FaMapMarkerAlt /> Gandhipuram, Coimbatore - 641012</p>
            <p><FaPhoneAlt /> <a href={`tel:+91${phoneNumber}`}>+91 {phoneNumber}</a></p>
            <p><FaEnvelope /> <a href="mailto:info@appvortexsolution.in">info@appvortexsolution.in</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright 2026 App Vortex Solution. All Rights Reserved.</p>
          <span>Built for modern digital growth.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
