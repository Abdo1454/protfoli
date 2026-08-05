import { FaLaptopCode, FaGraduationCap, FaCode } from "react-icons/fa";

const experiences = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Web Development Trainee",
    company: "National Telecommunication Institute (NTI)",
    period: "2026",
    description:
      "Completed an intensive Full Stack Web Development training program, building modern web applications with React, Laravel, PHP, MySQL, REST APIs, Git, GitHub, and collaborative development workflows.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Web Development Diploma",
    company: "Creativa Zagazig (ITIDA / TIEC)",
    period: "Nov 2025 – Feb 2026",
    description:
      "Successfully completed an 84-hour Web Development Diploma, gaining hands-on experience with HTML5, CSS3, JavaScript, React, React Router, REST APIs, Git, and GitHub through practical projects.",
  },
  {
    icon: <FaCode />,
    title: "Problem Solving Level 0/1",
    company: "ZU ICPC Community",
    period: "2025",
    description:
      "Completed Problem Solving Level 0/1, strengthening algorithmic thinking, time complexity analysis, and competitive programming fundamentals using C++.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Bachelor of Computers & Information",
    company: "Faculty of Computers and Information",
    period: "2024 – Present",
    description:
      "Pursuing a Bachelor's degree with coursework in software engineering, algorithms, data structures, databases, operating systems, computer networks, and modern web technologies.",
  },
  {
    icon: <FaCode />,
    title: "Full Stack Developer",
    company: "Personal Projects",
    period: "2025 – Present",
    description:
      "Designed and developed responsive frontend and full-stack web applications using React, Bootstrap, Laravel, PHP, MySQL, and REST APIs while continuously improving software engineering and problem-solving skills.",
  },
];

function Experience() {
  return (
    <section id="experience" className="container py-5">
      <div className="text-center mb-5">
        <span className="text-info fw-semibold text-uppercase">
          Experience
        </span>

        <h2 className="display-4 fw-bold text-white mt-2">
          My Journey.
        </h2>

        <p
          className="text-secondary mx-auto"
          style={{ maxWidth: "700px" }}
        >
          A timeline of my education, professional training, competitive
          programming journey, and hands-on software development experience.
        </p>
      </div>

      <div className="row g-4">
        {experiences.map((item, index) => (
          <div key={index} className="col-lg-6">
            <div className="card bg-dark border border-secondary rounded-4 shadow h-100 p-4">

              <div
                className="d-flex justify-content-center align-items-center rounded-circle bg-primary bg-opacity-10 mb-4"
                style={{
                  width: "70px",
                  height: "70px",
                  fontSize: "30px",
                  color: "#0dcaf0",
                }}
              >
                {item.icon}
              </div>

              <h4 className="text-white fw-bold">
                {item.title}
              </h4>

              <h6 className="text-info mb-2">
                {item.company}
              </h6>

              <small className="text-secondary d-block mb-3">
                {item.period}
              </small>

              <p className="text-secondary mb-0">
                {item.description}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;