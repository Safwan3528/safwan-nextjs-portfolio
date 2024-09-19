"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaEye } from "react-icons/fa";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Send,
  Download,
  Eye,
} from "lucide-react";

export function PortfolioComponent() {
  const [darkMode, setDarkMode] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <header className="fixed top-0 left-0 right-0 z-10 bg-opacity-90 backdrop-filter backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#" className="text-2xl font-bold">
                {/*Logo*/}
              </a>
            </motion.div>
            <ul className="flex space-x-4 items-center">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#about">About</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#skills">Skills</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#projects">Projects</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#contact">Contact</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://github.com/safwan3528"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-current"
                >
                  <Github className="w-5 h-5" />
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://www.linkedin.com/in/safwanrahimi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-current"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </motion.li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 pt-24">
        <section id="hero" className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Image
              src="/image/profile.jpg"
              alt="Safwan Rahimi"
              width={800}
              height={500}
              className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 shadow-lg"
            />
          </motion.div>
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Safwan Rahimi
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="flex space-x-4">
              <a
                href="https://api.whatsapp.com/send?phone=601156370422"
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                Get in touch
              </a>
              <a
                href="/resume/Resume.pdf"
                download
                className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300 flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="https://github.com/Safwan3528"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/safwanrahimi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </motion.a>
              <motion.button
                onClick={toggleDarkMode}
                className={`${
                  darkMode
                    ? "bg-yellow-400 text-gray-900"
                    : "bg-black text-white"
                } px-4 py-2 rounded-full hover:bg-opacity-90 transition duration-300 flex items-center`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 mr-2" />
                ) : (
                  <Moon className="w-5 h-5 mr-2" />
                )}
                {darkMode ? "Light" : "Dark"}
              </motion.button>
            </div>
          </motion.div>
        </section>

        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <motion.p
            className="text-xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={0}
          >
            I am a passionate fullstack developer with a strong foundation in
            both front-end and back-end technologies. I love creating elegant,
            efficient, and user-friendly web applications.
          </motion.p>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={1}
          >
            With a keen eye for design and a deep understanding of modern web
            technologies, I strive to build seamless digital experiences that
            make a difference.
          </motion.p>
        </section>

        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "HTML", level: 97 },
              { name: "CSS", level: 97 },
              { name: "JavaScript", level: 90 },
              { name: "React", level: 85 },
              { name: "Node.js", level: 80 },
              { name: "Express", level: 80 },
              { name: "TypeScript", level: 75 },
              { name: "SQL", level: 70 },
              { name: "MongoDB", level: 70 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                custom={index}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <motion.div
                    className="bg-red-800 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A full-featured online store built with React and Node.js",
                image: "/placeholder.svg?height=200&width=300",
                gitUrl: "https://github.com/Safwan3528/ecommerce-platform",
                projectUrl: "https://ecommerce-platform.netlify.app",
              },
              {
                title: "Task Management App",
                description:
                  "A productivity tool created using React Native and Firebase",
                image: "/placeholder.svg?height=200&width=300",
                gitUrl: "https://github.com/Safwan3528/task-management-app",
                projectUrl: "https://task-management-app.netlify.app",
              },
              {
                title: "Data Visualization Dashboard",
                description:
                  "An interactive dashboard built with D3.js and Express",
                image: "/placeholder.svg?height=200&width=300",
                gitUrl:
                  "https://github.com/Safwan3528/data-visualization-dashboard",
                projectUrl: "https://data-visualization-dashboard.netlify.app",
              },
              {
                title: "Social Media Analytics Tool",
                description:
                  "A tool for analyzing social media trends using Python and machine learning",
                image: "/placeholder.svg?height=200&width=300",
                gitUrl:
                  "https://github.com/Safwan3528/social-media-analytics-tool",
                projectUrl: "https://social-media-analytics-tool.netlify.app",
              },
              {
                title: "Personal Finance Tracker",
                description:
                  "A web app to help users manage their finances, built with Vue.js and Django",
                image: "/placeholder.svg?height=200&width=300",
                gitUrl:
                  "https://github.com/Safwan3528/personal-finance-tracker",
                projectUrl: "https://personal-finance-tracker.netlify.app",
              },
              {
                title: "Real-time Chat Application",
                description:
                  "A chat app with real-time messaging using Socket.io and React",
                image: "/placeholder.svg?height=200&width=300",
                gitUrl:
                  "https://github.com/Safwan3528/real-time-chat-application",
                projectUrl: "https://real-time-chat-application.netlify.app",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                custom={index}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex justify-between mt-4">
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
                    >
                      <code className="text-lg">&lt;/&gt;</code>
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
                    >
                      <Eye className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={controls}
              custom={0}
            >
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="flex flex-col space-y-4">
                <a
                  href="mailto:safwan.rahimi87@gmail.com"
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
                >
                  <Mail className="w-5 h-5" />
                  <span>safwan.rahimi87@gmail.com</span>
                </a>
                <a
                  href="https://github.com/Safwan3528"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/safwanrahimi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Safwan Rahimi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
