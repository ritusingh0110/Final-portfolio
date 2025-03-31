'use client';

import React, { useEffect, ReactNode } from 'react';

interface SectionObserverProps {
  children: ReactNode;
}

const SectionObserver: React.FC<SectionObserverProps> = ({ children }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default SectionObserver; 