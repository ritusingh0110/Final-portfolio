'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend & Languages' | 'Tools & Technologies';
}

const skills: Skill[] = [
  // Frontend
  { name: 'React.js', level: 90, category: 'Frontend' },
 
  { name: 'TypeScript', level: 50, category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  
  // Backend & Languages
  { name: 'Node.js', level: 30, category: 'Backend & Languages' }, 
  { name: 'C/C++', level: 70, category: 'Backend & Languages' },
  { name: 'Java', level: 80, category: 'Backend & Languages' },
  { name: 'SQL', level: 70, category:'Backend & Languages' },
  { name: 'RESTful APIs', level: 50, category: 'Backend & Languages' },

  
  
  // Tools & Technologies
  { name: 'Git', level: 85, category: 'Tools & Technologies' },
  { name: 'Docker', level: 70, category: 'Tools & Technologies' },

 
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
        <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const categories = ['Frontend', 'Backend & Languages', 'Tools & Technologies'] as const;

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
            My Skills
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {category}
              </h3>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm always learning and exploring new technologies to stay up-to-date with the latest trends in web development.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills; 