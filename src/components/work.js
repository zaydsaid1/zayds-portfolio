import React from "react";

import RhythemRater from "../images/rhythemrater.png";

import NoteTaker from "../images/NoteTaker.png";

import Watchfans from "../images/watch-fans.png";


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
 
         <img class="img2" src={NoteTaker} alt="bird" width={600} height={400}/>
         <p class="project-two">TThe goal was to create an application that can be used to write, save, and delete notes. This app uses an express backend and saves and retrieves note data from a JSON file. The process involved building the application backend and connecting it with the frontend. For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.</p>
         
         <img class= "img3" src={Watchfans} alt="bird" width={600} height={400}/>
         <p class="project-three">This application is an E-commerce website targeting watch enthusiast, the application uses: React for the client side, GraphQl on the server-side and a No-SQL database. The website advertises a plethora of differing watches ranging from luxury, vintage to various era and much more.</p>

    </div>
  </section>
  );
}