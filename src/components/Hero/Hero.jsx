import heroImage from "../../assets/images/img-Abdulrahim.png";
import CV from "../../assets/Abdulrahim_Elsayed_Resume(1).pdf";
import {
  FaGithub,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
function Hero() {
  return (
    <section
      id="home"
      className="hero-section min-vh-100 d-flex align-items-center"
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Text */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 fw-bold">
              Hi,<br/> I'm Abdulrahim
            </h1>

            <h2 className="text-primary mb-3">
              Full Stack Developer
            </h2>

            <p className="lead mb-4">
              I build scalable, responsive web applications with a focus on
              high performance and exceptional user experiences. Transforming
              complex problems into elegant, intuitive digital solutions.
            </p>

            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="#projects" className="btn btn-primary px-5 py-3 rounded-5" >
                View Projects <FaArrowRight className="ms-2" />
              </a>

              <a href={CV} download className="btn btn-outline-light px-5 py-3 rounded-5">
                Download CV <FaDownload />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0 hero-image">
            <img
              src={heroImage}
              alt="Abdulrahim"
              className="img-fluid "
              style={{ maxWidth: "380px" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;