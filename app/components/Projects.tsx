'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Echo-Med-Ai",
    description: "EchoMed, an AI-powered tool that transforms smartphones into medical diagnostic devices. EchoMed leverages advanced AI to analyze heart and lung sounds in real time with clinical-grade accuracy. This means it can potentially assist in detecting conditions related to cardiopulmonary health by using just a smartphone, making medical diagnostics more accessible and convenient.",
    image: "/ecommerce.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/ritusingh0110/ecommerce",
   
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Framer Motion, featuring smooth animations and responsive design.",
    image: "/portf.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/ritusingh0110/portfolio",
    liveUrl: "https://ritu-portfolio.vercel.app"
  },
  {
    title: "Period_Tracker",
    description: "A Period Tracker is a web application designed to help individuals monitor their menstrual cycle, predict upcoming periods, and track symptoms over time. The app allows users to log their period start and end dates, track mood and symptoms, and receive cycle predictions based on historical data.",
    image: "/periodTracker.jpg",
    technologies: ["Next.js", "React.js"],
    githubUrl: "https://github.com/ritusingh0110/Period_Tracker",
   
  },
  {
    title: "ToDo List App",
    description: "A modern and intuitive ToDo List application with features like task categorization, due dates, priority levels, and local storage persistence. Built with React and styled with Tailwind CSS.",
    image: "/ToDoList.jpg",
    technologies: ["React", "Tailwind CSS", "Local Storage", "TypeScript"],
    githubUrl: "https://github.com/ritusingh0110/ToDoList",
    
  },
  {
    title: "Random Password generator",
    description: "A Random Password Generator is a tool that creates secure and unpredictable passwords based on specified criteria, such as length and character types. It helps improve security by generating passwords that are difficult to guess or crack.",
    image: "/Password.jpg",
    technologies: ["HTML","Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/ritusingh0110/random_password_generator"
  }
 
 
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transform hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/400x200?text=${project.title}`;
          }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
            </svg>
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects; 