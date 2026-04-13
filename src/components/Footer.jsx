import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4">
            <h5>App Vortex Solution</h5>
            <p>
              We provide Web Development, App Development, Digital Marketing,
              Internship Programs and Hosting solutions to grow your business.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/internship">Internship</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>📍 Gandhipuram, Coimbatore</p>
            <p>📞 +91 8525999022</p>
            <p>📧 appvortexsolution.mail@gmail.com</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom text-center">
          <p>© 2026 App Vortex Solution. All Rights Reserved.</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;