let projectts=document.getElementById("projects");

function getProjects(){
    fetch("../data.json").then(
        (res)=>res.json()
    ).then(
        (data)=>{
            displayProjects(data.projects);
        }
    ).catch((error)=>{
        console.log("Error:",error);
    });
}

function  displayProjects(projects){
      let cartona = "";

  projects.forEach((project) => {
    cartona += `
    
      <div class="project-card">

        <img 
          
          src="${project.image}" 
          alt="${project.title}" 
        />

        <div class="links-project">

          <a 
            href="${project.liveDemo}" 
            target="_blank"
          >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>

          <a 
            href="${project.github}" 
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>

        </div>

        <p>
          ${project.category}
        </p>

        <h4>
          ${project.title}
        </h4>

        <p>
          ${project.description}
        </p>

        <div class="tech-project">

          ${project.technologies
            .map((tech) => `<p>${tech}</p>`)
            .join("")}

        </div>

      </div>
    `;
  });

  projectts.innerHTML = cartona;

}
 


getProjects();



    //  <div class="project-card">
    //       <img id="imge" src="img/projectEcommrce.png" />
    //       <div class="links-project">
    //         <a><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    //         <a><i class="fa-brands fa-github"></i></a>
    //       </div>
    //       <p>Problem: Client needed a high-converting product showcase page</p>
    //       <h4>E-Commerce Landing Page</h4>
    //       <p>A modern, responsive landing page designed to maximize conversions<br> with clean UI,
    //          fast loading, and mobile-first approach.</p>
    //          <div class="tech-project">
    //           <p>HTML5</p>
    //           <p>CSS3</p>
    //           <p>JavaScript</p>
    //          </div>
    //     </div>