import React from 'react';
import { skillCategories } from '@/data/portfolio';
import TechIcon from './TechIcon';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  return (
    <div id="skills" className="scroll-mt-16 md:scroll-mt-20 px-4 py-8 sm:py-12 md:py-20 xl:p-20 bg-[#fafafa] text-black">
      <div className="w-full sm:w-11/12 md:w-12/12 lg:w-9/12 col-centered">
        <ScrollReveal direction="up" duration={500}>
          <div className="pt-2 sm:pt-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight">
              Technical Skills
            </h2>
            <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-black mt-2 sm:mt-3 leading-snug">
              Building robust backends with modern tooling from AI to cloud infrastructure.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="h-full">
              <ScrollReveal
                direction="up"
                delay={index * 60}
                duration={500}
                className="h-full"
              >
                <div className="h-full p-5 sm:p-6 border-2 sm:border-4 border-black bg-white rounded-2xl shadow-sm hover:shadow-xl duration-200 move-up-slightly flex flex-col justify-between">
                  <div>
                    <div className="mb-3 sm:mb-4 flex items-center gap-3">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-gray-100 border border-gray-300 inline-flex items-center justify-center shadow-xs">
                        <TechIcon name={category.categoryIcon} size={26} />
                      </div>
                      <div className="text-xl sm:text-2xl font-extrabold text-black">{category.title}</div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                      {category.items.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg text-xs sm:text-sm md:text-base font-bold transition-all duration-150 border border-gray-300"
                        >
                          <TechIcon name={item.iconName} size={16} />
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
