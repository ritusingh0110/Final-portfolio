'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="relative w-full">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>
        
        <section id="skills" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
          <Skills />
        </section>
        
        <section id="projects" className="min-h-screen py-20">
          <Projects />
        </section>
        
        <section id="contact" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
          <Contact />
        </section>
      </main>
    </div>
  );
} 