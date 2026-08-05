function About() {
  const stats = [
    { value: "3+", label: "Years Learning" },
    { value: "5+", label: "Projects Completed" },
    { value: "12+", label: "Technologies" },
    { value: "100%", label: "Commitment" },
  ];

  return (
    <section id="about" className="py-5 text-light">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Content */}
          <div className="col-lg-5 text-center text-lg-start">
            <span className="text-primary fw-semibold">Who I Am</span>

            <h2 className="display-5 fw-bold mt-2">
              About Me
            </h2>

            <div
              className="bg-primary rounded mt-3 mb-4"
              style={{ width: "80px", height: "4px" }}
            ></div>

            <h4 className="text-info mb-3">
              Full Stack Developer
            </h4>

            <p className="text-secondary fs-5">
              Passionate about building modern, scalable, and high-performance
              web applications. I enjoy turning complex ideas into clean,
              responsive, and user-friendly digital experiences while
              continuously learning new technologies and best practices.
            </p>
          </div>

          {/* Right Content */}
          <div className="col-lg-7">
            <div className="card bg-secondary border-0 shadow-lg p-4">
              <p className="text-light mb-4">
                I specialize in developing modern web applications using
                React, JavaScript, Bootstrap, Laravel, Node.js, and MySQL.
                My goal is to write clean, maintainable code while creating
                intuitive user experiences and scalable backend solutions.
              </p>

              <div className="row g-3">
                {stats.map((item, index) => (
                  <div className="col-6 col-md-3" key={index}>
                    <div className="bg-dark rounded-3 p-3 text-center h-100">
                      <h3 className="text-primary fw-bold mb-1">
                        {item.value}
                      </h3>

                      <small className="text-light">
                        {item.label}
                      </small>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;