import React from "react";
import ProjectsContainer from "../../components/ProjectsContainer/ProjectsContainer";
import NavBar from "../../components/NavBar/NavBar";
import Moon from "../../components/Moon/Moon"
import Footer from "../../components/Footer/Footer"

function Portfolio() {
    return (
      <>
      <NavBar />
      <ProjectsContainer />
      <Moon />
      <Footer />
      </>
    )
  }

  export default Portfolio;