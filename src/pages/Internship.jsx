import "./Internship.css";

function Internship() {
  return (
    <div className="internship-page">

      {/* HERO */}
      <section className="intern-hero text-center">
        <div className="container">
          <h1>Internship Programs</h1>
          <p>Gain real-time experience with live projects</p>
        </div>
      </section>

      {/* COURSES */}
      <section className="intern-courses">
        <div className="container text-center">
          <h2 className="section-title">Available Programs</h2>

          <div className="row mt-4">

            <div className="col-md-4">
              <div className="course-card">
                <h5>Web Development</h5>
                <p>HTML, CSS, JS, React real-time training.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="course-card">
                <h5>App Development</h5>
                <p>Android app development with projects.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="course-card">
                <h5>Digital Marketing</h5>
                <p>SEO, Ads & social media strategies.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="intern-benefits">
        <div className="container text-center">
          <h2 className="section-title">Why Join Us?</h2>

          <div className="row mt-4">
            <div className="col-md-3"><div className="benefit-box">Live Projects</div></div>
            <div className="col-md-3"><div className="benefit-box">Certificate</div></div>
            <div className="col-md-3"><div className="benefit-box">Placement Support</div></div>
            <div className="col-md-3"><div className="benefit-box">Expert Mentors</div></div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="intern-form">
        <div className="container">
          <h2 className="section-title text-center">Apply Now</h2>

          <form className="form-box">

            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />

            <select>
              <option>Select Course</option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>Digital Marketing</option>
            </select>

            <textarea placeholder="Message"></textarea>

            <button type="submit">Apply Now</button>

          </form>
        </div>
      </section>

    </div>
  );
}

export default Internship;