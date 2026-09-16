import React from 'react';
import { experienceData, educationData } from '@/data/portfolio';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  return (
    <div id="experience" className="scroll-mt-16 md:scroll-mt-20 px-4 py-8 sm:py-12 md:py-20 xl:p-20 bg-[#fafafa] text-black">
      <div className="w-full sm:w-11/12 md:w-12/12 lg:w-9/12 col-centered">
        <ScrollReveal direction="up" duration={500}>
          <div className="pt-2 sm:pt-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black">Experience</h2>
          </div>
        </ScrollReveal>
        
        {/* Work Experience Card */}
        <div className="mt-4 sm:mt-6">
          <ScrollReveal direction="up" delay={100} duration={500}>
            <div className="border-2 sm:border-4 border-black rounded-2xl p-5 sm:p-8 md:p-10 move-up-slightly hover:shadow-xl duration-200 shadow-xs bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black">
                    {experienceData.role}
                  </h3>
                  <div className="text-base sm:text-xl md:text-2xl font-bold text-gray-700 mt-1">
                    {experienceData.company}
                  </div>
                </div>
                <div className="text-sm sm:text-lg md:text-xl font-bold text-gray-500 mt-1 sm:mt-0">
                  {experienceData.period}
                </div>
              </div>
              <ul className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
                {experienceData.bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base md:text-lg font-semibold text-gray-800 leading-relaxed"
                  >
                    <span className="text-black font-extrabold mt-0.5">&rarr;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Education Card */}
        <div className="mt-4 sm:mt-6">
          <ScrollReveal direction="up" delay={200} duration={500}>
            <div className="border-2 sm:border-4 border-black rounded-2xl p-5 sm:p-8 md:p-10 move-up-slightly hover:shadow-xl duration-200 shadow-xs bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black">
                    {educationData.degree}
                  </h3>
                  <div className="text-base sm:text-xl md:text-2xl font-bold text-gray-700 mt-1">
                    {educationData.institution}
                  </div>
                </div>
                <div className="text-sm sm:text-lg md:text-xl font-bold text-gray-500 mt-1 sm:mt-0">
                  {educationData.period}
                </div>
              </div>
              {educationData.extra && (
                <div className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold text-gray-600">
                  {educationData.extra}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
