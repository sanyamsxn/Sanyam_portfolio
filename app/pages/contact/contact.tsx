/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Code2 } from "lucide-react"
import Link from "next/link"
import "./contact.css"
interface ContactProps {
  scrollY: number
}

export default function Contact({ scrollY }: ContactProps) {
  const [showIcons, setShowIcons] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0)

  useEffect(() => {
    // Calculate when iPhone reaches middle of screen
    const viewportHeight = window.innerHeight
    // Adjust threshold to account for landing page
    const scrollThreshold = viewportHeight * 0.7
    if (typeof window !== 'undefined') {
        setViewportHeight(window.innerHeight)
      }

    if (scrollY > scrollThreshold) {
      setShowIcons(true)
    } else {
      setShowIcons(false)
    }
  }, [scrollY])

  // Calculate iPhone position based on scroll, but adjust for landing page
  const adjustedScrollY = Math.max(0, scrollY - viewportHeight)
  const iPhonePosition = Math.min(40, adjustedScrollY /6 )

  return (
    <div className="h-[110vh] bg-black relative overflow-hidden">
         
      <div className="h-screen sticky top-0 flex flex-col items-center justify-center text-white">
      <h1 id="contactHeading" className="text-5xl md:text-8xl font-bold mb-8 text-center bg-clip-text bg-gradient-to-r from-purple-400 via-pink-600 to-purple-800 bg-clip-text text-transparent">
          Connect With Me
          <p id="text" className="text-xl md:text-4xl text-center mb-12 text-slate-300">
          No bug too big to fix
        </p>
        </h1>

        

        {/* iPhone Container */}
        <div
          className="absolute transition-all duration-300 ease-out"
          style={{
            bottom: `${-120 + iPhonePosition *4}%`,
          }}
        >
          {/* iPhone Image */}
          <div className="relative w-[620px] h-[860px] overflow-hidden shadow-xl">
            <img id="iphone" src="/iphone.jpg" alt="iPhone" className="w-[100%] h-[100%] object-fit z-10" />

            {/* iPhone Screen Overlay */}
            <div className="absolute inset-0 bg-pink bg-opacity-40 flex justify-center items-center">
              {/* Social Icons */}
              <div
                className={`flex flex-col items-center justify-center h-full gap-10 transition-opacity duration-700 ${showIcons ? "opacity-100" : "opacity-0"}`}
              >
                <Link
                  href="https://github.com/sanyamsxn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-transform hover:scale-110"
                >
                  <div className="bg-white rounded-full w-16 h-16 p-4 shadow-lg flex justify-center items-center">
                    <Github size={40} className="text-black" />
                  </div>
                  <p className="text-center mt-2 text-white">GitHub</p>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/sanyam-saxena-7957441a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-transform hover:scale-110"
                >
                  <div className="bg-white rounded-full w-16 h-16 p-4 shadow-lg flex justify-center items-center">
                    <Linkedin size={40} className="text-[#0077B5]" />
                  </div>
                  <p className="text-center mt-2 text-white">LinkedIn</p>
                </Link>

                <Link
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-transform hover:scale-110"
                >
                  <div className="bg-white rounded-full w-16 h-16 p-4 shadow-lg flex justify-center items-center">
                    <Code2 size={40} className="text-[#FFA116]" />
                  </div>
                  <p className="text-center mt-2 text-white">LeetCode</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
