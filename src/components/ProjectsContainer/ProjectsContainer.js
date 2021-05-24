import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../projects.json";
//add CSS

function ProjectsContainer() {
    return (
      <>
        <div id="project-cards">
        {projects.map((project) => (
          <ProjectCard
            picture={project.picture}
            title={project.title}
            deployedApp={project.deployedApp}
            github={project.github}
          />
        ))}
        </div>
      </>
    );
  }
  
  export default ProjectsContainer;
  