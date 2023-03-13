import React from "react";
import zayd from "../images/zayd.jpg"


export default function about () {
    return (
        <section id="ABOUT ME">
    <div class="about-me">
            <div class="line"></div>
           <img src= {zayd} alt="img"></img>
           <div class="about-text">
            <h2>ABOUT ME</h2>
            <h5><span> Developer </span>& Designer</h5>
            <p>
            As a full-stack web developer, I have a passion for building intuitive and engaging web applications that deliver seamless user experiences. 
            With extensive experience in both front-end and back-end technologies, I bring a unique perspective to my work, 
            combining a strong creative vision with a deep understanding of the technical aspects of web development. 
            Whether working on a small website or a complex web application, I am dedicated to delivering high-quality results that exceed my clients' expectations. 
            With a focus on continuous learning and staying up-to-date with the latest technologies, I am committed to staying at the forefront of my field and delivering the best possible solutions for my clients.
            </p>
           </div> 
    </div>
        </section>
    );
}