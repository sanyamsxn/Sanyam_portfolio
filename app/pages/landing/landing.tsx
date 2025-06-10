"use client"

import { useEffect } from "react"
import "./landing.css"
import Like from '../../components/like';


export default function Landing() {
  useEffect(() => {
    const introElement = document.getElementById("intro")
    const contentElement = document.getElementById("content")

    if (introElement && contentElement) {
      setTimeout(() => {
        introElement.style.display = "none"
        contentElement.classList.add("show")
      }, 1500) // 3 seconds
    }
  }, [])

  return (
    <div id="main">
      <header>
        <nav>
          <span><Like /></span>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Proficiencies</a>
          <a href="#work">Contact</a>
        </nav>
      </header>

      <div id="heading">
        <h1>HII, I&apos;M SANYAM</h1>
      </div>

        <div id="imgM">
            <img src="./model.jpeg" alt='photo'/>
        </div>
        
        <div id="bio">
          <h3>MERN | MEAN &nbsp;DEVELOPER</h3>
          <p>Welcome to my little corner of the internet, where code works… most of the time.
            I turn coffee into code and then spend hours debugging what I just wrote.
            Stick around — it’s a beautiful mess in here.
          </p>

        </div>
      
    </div>
  )
}





{/* <div className="photo-frame">
        <img src="sanyam2.jpeg" alt="My Photo" />
      </div>

      <div id="intro" className="blink">
        <h2>Unveiling......</h2>
      </div>

      <div id="content" className="hidden">
         <h1 id="name">SANYAM </h1>
        <h1 id="lastname">SAXENA</h1> 
       
        <h3>MERN | MEAN &nbsp;DEVELOPER</h3>
        <p>Welcome to my little corner of the internet, where code works… most of the time.
          I turn coffee into code and then spend hours debugging what I just wrote.
          Stick around — it’s a beautiful mess in here.
        </p>
      </div> */}