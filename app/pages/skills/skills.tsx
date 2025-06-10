"use client"

import { useState, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import "./skills.css"
import { SiAngular, SiNodedotjs, SiMongodb, SiExpress, SiThreedotjs, SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si"

const techIcons = {
  Angular: <SiAngular className="text-red-500" />,
  "Node": <SiNodedotjs className="text-green-500" />,
  MongoDb: <SiMongodb className="text-green-600" />,
  Express: <SiExpress className="text-gray-400" />,
  "Three.js": <SiThreedotjs className="text-blue-400" />,
  HTML: <SiHtml5 className="text-orange-500" />,
  CSS: <SiCss3 className="text-blue-500" />,
  JS: <SiJavascript className="text-yellow-400" />,
  "NextJs": <SiNextdotjs className="text-white" />,
  TypeScript: <SiTypescript className="text-blue-400" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
}

interface Project {
  id: number;
  title: string;
  technologies: string[];
  image: string;
  link: string;
  content: string;
}
// Project data
const projects: Project[] = [
  {
    id: 1,
    title: "AcademiHub",
    technologies: ["Angular", "Node", "MongoDb", "Express", "Three.js"],
    image: "/academicHub.png",
    link: "./projects/book-library",
    content: "AcademiHub is a web platform for students to share and access study materials. I designed and developed the user dashboard with dynamic file listing and filter features.Implemented secure file upload, organized resource categories, and the authentication part. Focused on creating a user-friendly, efficient space for academic collaboration."
  },
  {
    id: 2,
    title: "Portfolio",
    technologies: ["HTML", "CSS", "JS"],
    image: "/rishabhPort.png",
    link: "./projects/ecommerce",
    content : "Developed a personal portfolio website for my client, Rishabh, utilizing HTML, CSS, JavaScript, Bootstrap, and various third-party libraries. The portfolio showcases his skills, projects, and contact details with a responsive and modern design, ensuring seamless performance across all devices. Integrated animations and interactive elements to enhance user engagement and deliver a visually appealing, professional online presence."
  },
  {
    id: 3,
    title: "DishItOut",
    technologies: ["TypeScript", "NextJs"],
    image: "/placeholder.svg?height=300&width=500",
    link: "./projects/weather",
    content: "DishItOut is your go-to platform for sharing and discovering online recipes. Built with Next.js, it offers a fast, seamless experience for food lovers. Join a vibrant community of home cooks and culinary enthusiasts. Share your favorite dishes, explore new flavors, and connect with fellow foodies!"
  },
]

export default function ProjectsPage() {
  return (
    <div className="h-[170vh] project text-white p-8 md:p-16 w-full">
      <div className="w-full flex flex-col items-center">
        <h1  className="headingP text-6xl mt-10 md:text-8xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-600 to-purple-800 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="headingPg text-xl md:text-2xl text-gray-300  text-center">The tech projects I&apos;ve created</p>

        <div className="flex flex-col gap-16 w-full w-[100%] items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}


function ProjectCard({ project }: { project: Project }) {
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
  ref={cardRef}
  className="relative h-[28vh] rounded-lg bg-[#111a33]/50 border border-gray-700 group transition-all hover:border-gray-500 w-[1100px]"
>
  <div className="flex flex-col md:flex-row md:items-center justify-between">
    
    {/* Hoverable area */}
    <div
      className="flex-1 mainPro"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <h2 className="text-2xl md:text-3xl font-bold title text-center bg-gradient-to-r from-purple-400 via-pink-600 to-purple-800 bg-clip-text text-transparent">{project.title}</h2>
      <div className="flex gap-3 justify-center ">
        {project.technologies.map((tech, index) => (
          <span key={index} className={ "tech"}>
            {techIcons[tech as keyof typeof techIcons] || tech}
          </span>
        ))}
      </div>
      <p className="content">{project.content}</p>

      {/* Floating image that follows cursor */}
      {isHovering && (
        <div
          className="absolute pointer-events-none z-10 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="rounded-md overflow-hidden shadow-xl w-[400px] h-[300px] border border-gray-700">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={300}
              className="fill w-full h-full "
            />
          </div>
        </div>
      )}
    </div>

    {/* Link area - no hover effect here */}
    <Link
      href={project.link}
      className= "s hover:text-blue-300 transition-colors"
    >
      <span className="mr-1 view">View Project</span>
      <ArrowUpRight className="view2 h-5 w-5" />
    </Link>
  </div>
</div>

  )
}
