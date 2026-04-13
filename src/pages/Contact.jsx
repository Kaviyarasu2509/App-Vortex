import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero text-center">
        <h1>Contact Us</h1>
        <p>We are here to help you grow your business</p>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-details">
        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <div className="contact-box">
                <h5>📍 Address</h5>
                <p>
                  2nd Floor, Balaji Complex, 288, 2nd St,<br/>
                  Opp. Anbu Mess, Cross Cut Road,<br/>
                  Gandhipuram, Coimbatore - 641012
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-box">
                <h5>📞 Phone</h5>
                <p>+91 8525999022</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-box">
                <h5>📧 Email</h5>
                <p>appvortexsolution.mail@gmail.com</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d301.1777018194491!2d76.96863158640599!3d11.018639896449491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1776101245907!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="App Vortex Location"
        ></iframe>
      </section>

      {/* FORM */}
      <section className="contact-form">
        <div className="container">
          <h2 className="text-center">Send Message</h2>

          <form className="form-box">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

    </div>
  );
}

export default Contact;