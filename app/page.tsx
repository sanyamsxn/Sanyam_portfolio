"use client"

import Work from "./pages/contact/contact"

import { useEffect, useState } from "react"
import Landing from "./pages/landing/landing"
import Contact from "./pages/Link/link"
import ProjectsPage from "./pages/project/project"
import Skill from "./pages/skills/skill"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-black relative overflow-hidden" >
    <section  id="home"><Landing /></section> 
<section  id="contt"><Contact scrollY={scrollY} /></section>
<section  id="projects"><ProjectsPage /></section>
<section  id="skills"><Skill /></section>
<section  id="work"><Work /></section>


    {/* show only when screen size is less than 1024px */}
    <section id="mobile">
    <p >This site is best viewed on desktop or tablet devices 📱💻</p>
    </section>
      
     </div>

  )
}
