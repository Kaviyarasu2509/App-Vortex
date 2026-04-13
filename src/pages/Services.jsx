import "./Services.css";

function Services() {
  return (
    <div className="services-page">

      <div className="container text-center">
        <h1 className="section-title">Our Services</h1>
        <p className="subtitle">We provide complete IT solutions for your business growth</p>

        <div className="row mt-5">

          <div className="col-md-4">
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2ViJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="Web Development" />
              <h5>Web Development</h5>
              <p>Responsive and modern websites for all businesses.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="App Development"/>
              <h5>App Development</h5>
              <p>Android & web apps with powerful features.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <img src="https://media.istockphoto.com/id/808098858/photo/digital-marketing-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=kTWoZfMrnLZfQajX17dCc_9tcMwsxszE0bEcH8Y-ipI=" alt="Digital Marketing" />
              <h5>Digital Marketing</h5>
              <p>SEO, Ads & social media strategies.</p>
            </div>
          </div>

          <div className="col-md-4 mt-4">
            <div className="service-card">
              <img src="https://plus.unsplash.com/premium_photo-1683147638125-fd31a506a429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2ViJTIwRGVzaWdufGVufDB8fDB8fHww" alt="Web Design" />
              <h5>Web Design</h5>
              <p>Creative UI/UX designs with modern look.</p>
            </div>
          </div>

          <div className="col-md-4 mt-4">
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1681164315051-add1906a9b07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW50ZXJuc2hpcCUyMFByb2dyYW1zfGVufDB8fDB8fHww" alt="Internship" />
              <h5>Internship Programs</h5>
              <p>Real-time training with live projects.</p>
            </div>
          </div>

          <div className="col-md-4 mt-4">
            <div className="service-card">
              <img src="https://media.istockphoto.com/id/2179769208/photo/dns-domain-name-system-and-web-server-network-system-concept-a-person-uses-a-laptop-with-dns.webp?a=1&b=1&s=612x612&w=0&k=20&c=yJ-AyVmRdFOKDPExtSt85m4ZyIRxA39M8BjxAXWxYX4=" alt="Hosting" />
              <h5>Domain & Hosting</h5>
              <p>Secure and reliable hosting solutions.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Services;