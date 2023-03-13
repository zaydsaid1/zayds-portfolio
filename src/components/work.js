import React from "react";

import RhythemRater from "../images/rhythemrater.png";

import NoteTaker from "../images/NoteTaker.png";

export default function project() {
  return (
    <section id="work">
         <h1>Work</h1>
      <div class="mainrow">
         <img src= {RhythemRater} alt="altar" width={600} height={400}/>
         <p class="project-one">Rhythm Rater is a website that contains music searching and
              comment function. Once logged in to your account, you are able to
              search your favorite music and comment it below.</p>
      </div>
      <div class="imagerow">
 
         <img class="img2" src={NoteTaker} alt="bird" width={600} height={200}/>
         <p class="project-two">This web application is a note taker using HTML, CSS, JavaScript,
              node.js & express.js. You are presented with a homepage, when
              pressing the button at the center of the page you are taken to the
              note taker page. This page allows you to type in a note and save
              it to the front end and back end. This application has been
              created to demonstrate my skills in connecting the front end to
              the back end using express.js & node.js.This project was built to
              showcase my abilities within the backend using node.js &
              express.js. The note becomes saved into the backend.</p>
      
    </div>
  </section>
  );
}