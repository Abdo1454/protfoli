import {
  FaLaptopCode,
  FaServer,
  FaTools,
} from "react-icons/fa";

function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="text-info fw-semibold text-uppercase">
            My Skills
          </span>

          <h2 className="display-4 fw-bold text-white mt-2">
            Technical Arsenal
          </h2>

          <p
            className="text-secondary mx-auto mt-3"
            style={{ maxWidth: "650px" }}
          >
            A curated stack of modern technologies chosen for performance,
            scalability, and developer experience.
          </p>
        </div>

        <div className="row g-4">

          {/* Frontend */}
          <div className="col-lg-4">
            <div className="card bg-dark border border-secondary rounded-4 shadow h-100 p-4">

              <div
                className="d-flex justify-content-center align-items-center rounded-3 mb-4"
                style={{
                  width: "70px",
                  height: "70px",
                  background: "#18243b",
                }}
              >
                <FaLaptopCode size={30} className="text-info" />
              </div>

              <h3 className="text-white fw-bold mb-4">
                Frontend
              </h3>

              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-secondary p-3">HTML5</span>
                <span className="badge bg-secondary p-3">CSS3</span>
                <span className="badge bg-secondary p-3">JavaScript</span>
                <span className="badge bg-secondary p-3">React</span>
                <span className="badge bg-secondary p-3">Bootstrap</span>
              </div>

            </div>
          </div>

          {/* Backend */}
          <div className="col-lg-4">
            <div className="card bg-dark border border-secondary rounded-4 shadow h-100 p-4">

              <div
                className="d-flex justify-content-center align-items-center rounded-3 mb-4"
                style={{
                  width: "70px",
                  height: "70px",
                  background: "#18243b",
                }}
              >
                <FaServer size={30} className="text-info" />
              </div>

              <h3 className="text-white fw-bold mb-4">
                Backend
              </h3>

              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-secondary p-3">Laravel</span>
                <span className="badge bg-secondary p-3">PHP</span>
                <span className="badge bg-secondary p-3">MySQL</span>
              </div>

            </div>
          </div>

          {/* Tools */}
          <div className="col-lg-4">
            <div className="card bg-dark border border-secondary rounded-4 shadow h-100 p-4">

              <div
                className="d-flex justify-content-center align-items-center rounded-3 mb-4"
                style={{
                  width: "70px",
                  height: "70px",
                  background: "#18243b",
                }}
              >
                <FaTools size={30} className="text-info" />
              </div>

              <h3 className="text-white fw-bold mb-4">
                Tools
              </h3>

              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-secondary p-3">Git</span>
                <span className="badge bg-secondary p-3">GitHub</span>
                <span className="badge bg-secondary p-3">VS Code</span>
                <span className="badge bg-secondary p-3">Postman</span>
                <span className="badge bg-secondary p-3">REST APIs</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;