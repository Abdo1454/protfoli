import React from "react";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="container py-5">
      {/* Section Title */}
      <h2 className="text-center text-light display-5 fw-bold mb-3">
        Featured Work.
      </h2>

      <p className="text-center text-secondary col-lg-6 mx-auto mb-5">
        A selection of recent projects highlighting complex problem-solving,
        clean architecture, and modern user experiences.
      </p>

      {/* Projects Grid */}
      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.id} className="col-lg-4 col-md-6">
            <div className="card bg-dark border border-secondary rounded-4 shadow h-100 p-3">

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="card-img-top rounded-3"
                style={{
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              {/* Card Body */}
              <div className="card-body d-flex flex-column">

                <span className="text-info small fw-semibold mb-2">
                  {project.category}
                </span>

                <h3 className="text-white fw-bold mb-3">
                  {project.title}
                </h3>

                <p
                  className="text-secondary"
                  style={{ minHeight: "90px" }}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="badge bg-secondary px-3 py-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto d-flex gap-3">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex-fill"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light flex-fill"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;