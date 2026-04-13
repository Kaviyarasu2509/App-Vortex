import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar custom-navbar navbar-expand-lg">
      <div className="container">
        
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          
          <span className="brand-text">APP VORTEX SOLUTION</span>
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          ☰
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><Link className="nav-link" to="/services">Services</Link></li>
            <li><Link className="nav-link" to="/internship">Internship</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>

          
        </div>

      </div>
    </nav>
  );
}

export default Navbar;