import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  return (
    <div id="contact" className="scroll-mt-16 md:scroll-mt-20 px-4 py-8 sm:py-12 md:py-20 xl:p-20 bg-black text-white">
      <div className="w-full sm:w-11/12 md:w-12/12 lg:w-9/12 col-centered text-center">
        <ScrollReveal direction="up" duration={500}>
          <div className="pt-2 sm:pt-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg sm:text-2xl md:text-4xl font-extrabold text-gray-300 mt-2 sm:mt-3">
              I&apos;m always open to new opportunities and interesting projects.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 sm:mt-8 gap-4">
          <div>
            <ScrollReveal direction="up" delay={100} duration={500} className="h-full">
              <a href={`mailto:${personalInfo.email}`} className="kill-link-style block h-full group">
                <div className="h-full move-up-slightly cursor-pointer p-6 sm:p-8 border-2 sm:border-4 border-gray-700 hover:border-white rounded-2xl bg-zinc-950 duration-200 text-center flex flex-col items-center justify-center active:scale-98">
                  <div className="p-3 sm:p-4 bg-gray-900 rounded-2xl mb-3 sm:mb-4 text-white">
                    <FaEnvelope className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold">Email</div>
                  <div className="text-sm sm:text-base font-bold mt-1 text-gray-400 break-all">{personalInfo.email}</div>
                </div>
              </a>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal direction="up" delay={200} duration={500} className="h-full">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="kill-link-style block h-full group"
              >
                <div className="h-full move-up-slightly cursor-pointer p-6 sm:p-8 border-2 sm:border-4 border-gray-700 hover:border-white rounded-2xl bg-zinc-950 duration-200 text-center flex flex-col items-center justify-center active:scale-98">
                  <div className="p-3 sm:p-4 bg-blue-900/40 rounded-2xl mb-3 sm:mb-4 text-[#0A66C2]">
                    <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold">LinkedIn</div>
                  <div className="text-sm sm:text-base font-bold mt-1 text-gray-400">vishv-munjapara</div>
                </div>
              </a>
            </ScrollReveal>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <ScrollReveal direction="up" delay={300} duration={500} className="h-full">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="kill-link-style block h-full group"
              >
                <div className="h-full move-up-slightly cursor-pointer p-6 sm:p-8 border-2 sm:border-4 border-gray-700 hover:border-white rounded-2xl bg-zinc-950 duration-200 text-center flex flex-col items-center justify-center active:scale-98">
                  <div className="p-3 sm:p-4 bg-gray-900 rounded-2xl mb-3 sm:mb-4 text-white">
                    <FaGithub className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold">GitHub</div>
                  <div className="text-sm sm:text-base font-bold mt-1 text-gray-400">vishv183</div>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal direction="up" delay={400} duration={500}>
          <div className="mt-8">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-lg sm:text-2xl font-extrabold border-2 sm:border-4 border-white bg-white text-black rounded-2xl hover:bg-black hover:text-white duration-200 active:scale-98 shadow-md"
            >
              Download Resume ↗
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
