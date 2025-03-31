'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Ritu Singh"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/500?text=Ritu+Singh';
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Frontend Developer & UI/UX Designer
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
              I’m Ritu Singh, a passionate frontend developer and a dedicated second-year Computer Science student. I thrive on solving real-world problems through innovative programming solutions. With proficiency in various programming languages and frameworks, I am committed to developing impactful applications while continuously enhancing my technical expertise.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h4>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">B.Tech in Computer Science</span>
                  <br />
                  Vellore Institue Of Technology
                  <br />
                  2023 - 2027
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Experience</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Frontend Developer 
                  </p>
                 
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
                    <li>Developed and maintained web applications using React and Node.js</li>
                    <li>Collaborated with cross-functional teams on various projects</li>
                    <li>Implemented responsive designs and improved user experience</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full"
              >
                Problem Solving
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 rounded-full"
              >
                Team Leadership
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full"
              >
                Creative Design
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 