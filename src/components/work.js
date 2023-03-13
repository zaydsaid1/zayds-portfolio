import React from "react";

import RhythemRater from "../images/rhythemrater.png";

import Filmapedia from "../images/Filmapedia.png"
export default function project() {
  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">
            Recent <span>Projects</span>
          </h1>
        </div>

        <div className="project-item">
          <div className="project-info">
            <h1>RhythemRater</h1>
            <h2>Group Project</h2>
            <p>
            Rhythm Rater is a website that contains music searching and
            comment function. Once logged in to your account, you are able to
            search your favorite music and comment it below.
              <br />
              <br />
              Technologies used:
              <br />
              #Html / #Css / #Javascript / #SQL / #Sequilize / #Handlebars /
              #Express.JS / #Node.JS
            </p>
          </div>
          <div className="project-img">
            <a href="https://shrouded-woodland-67381.herokuapp.com/">
              <img src={RhythemRater} alt="img" />
            </a>
          </div>
        </div>
        <div className="project-item">
            <div className="project-info">
              <h1>Filmapedia</h1>
              <h2>Group Project</h2>
              <p>
              A web app that showcases information about a film; it will display information such as release date, actors, movie poster and more. The web app demonstrates the ability to use a Javascript GET method to retrieve information using application programming interface (API). Once the information about the film is displayed, the web app will have a button that takes the user to a wikipedia page using a second API. The website also demonstrates the usage of a CSS framework called bulma to utilize the styling of the web application.
                <br />
                <br />
                Technologies used:
                <br />
                #Html / #Css / #Javascript
              </p>
            </div>
            <div className="project-img">
              <a href="https://lacko3006.github.io/Filmapedia/">
                <img src={Filmapedia} alt="img" />
              </a>
            </div>
          </div>

      </div>
      
    </section>
  );
}