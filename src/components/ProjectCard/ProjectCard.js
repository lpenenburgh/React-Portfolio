import React from "react";
import "../ProjectCard/ProjectCard.css"

function ProjectCard({ picture, title, summary, role, tech, deployedApp, github }) {
  return (
    <>
      <div className="col-md-4" id="card-column">
        <div className="card text-white bg-info h-100" id="project-card">
          <img
            src={picture}
            className="card-img-top"
            alt="Screenshot of website."
          />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <h5 className="summary">Project Summary</h5>
            <p> {summary} </p>
            <h5 className="role">Project Role</h5>
            <p> {role} </p>
            <h5 className="technologies">Technologies Used</h5>
            <p> {tech} </p>
            <a className="nav-link" href={deployedApp} target="_blank" rel="noopener noreferrer">
              <h5>Deployed Application</h5>
            </a>
            <a className="nav-link" href={github} target="_blank" rel="noopener noreferrer">
              <h5>GitHub Repository</h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;