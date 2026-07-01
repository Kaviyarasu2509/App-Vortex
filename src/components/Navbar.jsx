import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/app.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/internship", label: "Internship" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <Link className="navbar-brand" to="/">
          <div className="logo-wrapper">
            <span className="logo-mark">
              <img src={logo} alt="App Vortex Logo" className="logo" />
            </span>
            <div className="brand-text-wrapper">
              <span className="brand-text-main">APP VORTEX</span>
              <span className="brand-text-sub">SOLUTION</span>
            </div>
          </div>
        </Link>

        <button
          className={`navbar-toggler ${isOpen ? "active" : ""}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>

        <div className={`navbar-menu ${isOpen ? "show" : ""}`}>
          <div className="mobile-menu-head">
            <span>Menu</span>
            <small>Navigate App Vortex</small>
          </div>

          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                  to={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isOpen && <div className="navbar-overlay" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
}

export default Navbar;
