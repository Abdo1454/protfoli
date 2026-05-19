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

        <p class="category">
          ${project.category}
        </p>

        <h4>
          ${project.title}
        </h4>

        <p class="desc">
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

// send message
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.querySelector(".subject").value;
  const message = document.getElementById("message").value;

  const phone = "201066250647";

  const text = `
 New Message From Portfolio

 Name: ${name}
 Email: ${email}
 Subject: ${subject}
 Message: ${message}
`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
});

// light-mode and dark-mode
let varMode=1;
let imgMode=document.getElementById("img-mode");
imgMode.addEventListener("click",function (){
  if(varMode==1){
    varMode=0;
    imgMode.setAttribute("src","./img/icon-moon.svg");
    document.body.classList.add("light-mode");
  }else{
     varMode=1;
    imgMode.setAttribute("src","./img/icon-sun.svg");
    document.body.classList.remove("light-mode");
  }
})


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