import React from 'react';
import { projectCards } from '@/data/portfolio';
import TechIcon from './TechIcon';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  return (
    <div id="projects" className="scroll-mt-16 md:scroll-mt-20 px-4 py-8 sm:py-12 md:py-20 xl:p-20 bg-[#fafafa] text-black">
      <div className="w-full sm:w-11/12 md:w-12/12 lg:w-9/12 col-centered">
        <ScrollReveal direction="up" duration={500}>
          <div className="pt-2 sm:pt-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight">
              My Projects
            </h2>
            <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-black mt-2 sm:mt-3 leading-snug">
              I love to create things, and I&apos;m always working on something new! You can view some of my favorite projects below.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
          {projectCards.map((project, index) => (
            <div key={index} className="h-full">
              <ScrollReveal
                direction="up"
                delay={index * 60}
                duration={500}
                className="h-full"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kill-link-style block h-full group"
                >
                  <div className="h-full bg-white border-2 sm:border-4 border-black rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center move-up-slightly shadow-xs hover:shadow-xl transition-all duration-200 active:scale-98">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gray-50 border-2 border-black flex items-center justify-center mb-3 sm:mb-4 shadow-xs transform transition-transform group-hover:scale-110 duration-200">
                      <TechIcon name={project.iconName} size={30} />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black group-hover:text-gray-700 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-bold text-gray-700 mt-2">
                      {project.subtitle}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
