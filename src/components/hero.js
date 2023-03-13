import React from "react";

import Zayd from "../images/zayd.jpg";


export default function Hero() {
    return (
        <section id="hero">
        <div id="img-div">
            <img src={Zayd} alt="Profile photo" height={600} width={300}/>
        </div> 
       
            <div id="main-width">
                <h1 class="title2">Zayd Said</h1>
                <h1 id="title1">I'm a Web</h1>
                <h1 class="title2">Developer</h1>
                
            </div>
    </section>
    );
}