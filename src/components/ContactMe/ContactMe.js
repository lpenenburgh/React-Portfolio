import React from "react";
import contactme from "../../images/contactme.png";
import "./ContactMe.css";

function ContactMe() {
    return(
        <>
        <img src={contactme} id="portfolio" alt="text"/>
        <section className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div className="card text-white bg-info mb-3">
                <div className="card-body">
                  <h5 className="card-title">Email:</h5>
                  <p className="card-text">lpenenburgh@gmail.com</p>
                  <h5 className="card-title">Phone:</h5>
                  <p className="card-text">(703)969-3123</p>
                  <a href="https://github.com/lpenenburgh" target="_blank" rel="noopener noreferrer"><h5 className="card-title">GitHub</h5></a>
                  <a href="https://www.linkedin.com/in/lauren-penenburgh-00852a99/" target="_blank" rel=" noopener noreferrer"><h5 className="card-title">LinkedIN</h5></a>
                </div>
              </div>
            </div>
          </div>  
        </section>
        </>
    )
}

export default ContactMe;
