"use client"

import Work from "./pages/work/work"

import { useEffect, useState } from "react"
import Landing from "./pages/landing/landing"
import Contact from "./pages/contact/contact"
import Skill from "./pages/skills/skills"
import Test from "./pages/contact/test"

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
<section  id="projects"><Skill /></section>
<section  id="skills"><Test /></section>
<section  id="work"><Work /></section>


    {/* show only when screen size is less than 1024px */}
    <section id="mobile">
    <p >This site is best viewed on desktop or tablet devices 📱💻</p>
    </section>
      
     </div>

  )
}
