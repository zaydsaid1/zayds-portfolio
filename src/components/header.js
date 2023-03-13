import React from "react";

export default function Header() {
    
  return (  
<header>
        <h1>Zayd Said</h1>
        <nav>
            <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="https://github.com/zaydsaid1/portfolio" data-after="Contact"
                    >Github</a>
                </li>
            </ul>
        </nav>
    </header>
  );

}
