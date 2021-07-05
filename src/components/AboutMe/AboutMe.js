import React from "react";
import headshot from "../../images/headshot3.png";
import aboutme from "../../images/aboutme5.png";
import "./AboutMe.css";

function AboutMe() {
    return (
        <>
        <img src={headshot} id="headshot" alt="headshot"/>
        <img src= {aboutme} id="aboutme" alt="about me"/>
         <section className="container">
           <div className="row">
             <div className="col d-flex justify-content-center">
               <div className="card text-white bg-info mb-3">
                 <div className="card-body">
                   <p className="card-text">Welcome! My name is Lauren Penenburgh. I am a full stack web developer living in Steamboat Springs, Colorado. I recently earned a certificate in full stack web development from the University of Denver Coding Bootcamp to leverage my background in customer service to create utile
              applications to solve everyday problems. In my free time, I enjoy learning to code, skiing, hiking, and all types of crafting.
                     </p>
                 </div>
               </div>
             </div>
           </div>
           </section>
        </>


    )
}

export default AboutMe;