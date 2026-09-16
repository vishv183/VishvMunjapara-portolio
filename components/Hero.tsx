'use client';

import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { FaGithub, FaLinkedin, FaFileLines } from 'react-icons/fa6';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.pushState(null, '', `/${id}`);
    }
  };

  return (
    <>
      {/* Top Accent Bar */}
      <div className="h-1.5 md:h-2 block w-full bg-black" />

      {/* Hero Section */}
      <div className="px-4 py-8 sm:p-10 md:p-14 xl:p-20 xl:pb-22">
        <div className="w-full sm:w-11/12 md:w-12/12 lg:w-9/12 col-centered">
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center">
              <a
                href="/"
                onClick={(e) => handleSmoothScroll(e, 'top')}
                className="kill-link-style mr-6"
              >
                <span className="inline-block rounded-md animate__animated animate__fadeInDown border-4 border-black text-black select-none p-2 text-2xl xl:text-3xl font-extrabold bg-transparent">
                  {personalInfo.initials}
                </span>
              </a>
              <a
                href="/skills"
                onClick={(e) => handleSmoothScroll(e, 'skills')}
                className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 mx-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold text-black"
              >
                Skills
              </a>
              <a
                href="/projects"
                onClick={(e) => handleSmoothScroll(e, 'projects')}
                className="inline-block animate__animated animate__fadeInDown kill-link-style delay2 mx-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold text-black"
              >
                Projects
              </a>
              <a
                href="/experience"
                onClick={(e) => handleSmoothScroll(e, 'experience')}
                className="inline-block animate__animated animate__fadeInDown kill-link-style delay3 mx-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold text-black"
              >
                Experience
              </a>
            </div>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-block animate__animated animate__flipInX delay4 duration-300 text-2xl xl:text-3xl cursor-pointer border-4 px-4 py-2 border-black hover:bg-black hover:text-white rounded-md font-extrabold bg-transparent text-black"
            >
              Contact Me
            </button>
          </div>

          {/* Hero Content */}
          <div className="mt-8 sm:mt-12 md:mt-16 text-center">
            <div className="w-full flex justify-center">
              <img
                id="vishv-image"
                src={personalInfo.profileImage}
                alt={`Photo of ${personalInfo.name}`}
                style={{ borderRadius: '100%' }}
                className="inline-block animate__animated animate__fadeIn delay2 border-black duration-300 ease shadow-md border-4 sm:border-8 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover bg-white"
              />
            </div>
            
            <div className="animate__animated animate__fadeInUp px-2 sm:px-4 md:px-8 delay2 mt-6 sm:mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-snug">
              {personalInfo.headline}{' '}
              <span className="underline--magical">{personalInfo.highlightedName}</span>{' '}
              Here, you can check out what I&apos;m working on. I try my best to create{' '}
              <span className="inline-block whitespace-nowrap">things with ❤️</span>
            </div>

            {/* Tap-Friendly Responsive CTA Grid (GitHub, LinkedIn, Resume) */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-2 sm:px-4 md:px-8 mt-6 sm:mt-8 animate__animated animate__fadeInUp delay3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial min-w-[140px] inline-flex items-center justify-center gap-2 py-3 px-4 sm:px-6 bg-black text-white text-base sm:text-lg md:text-xl font-extrabold rounded-xl hover:bg-gray-800 active:scale-95 border-2 sm:border-4 border-black duration-150 shadow-sm"
              >
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial min-w-[140px] inline-flex items-center justify-center gap-2 py-3 px-4 sm:px-6 bg-[#0A66C2] text-white text-base sm:text-lg md:text-xl font-extrabold rounded-xl hover:bg-[#084e96] active:scale-95 border-2 sm:border-4 border-[#0A66C2] duration-150 shadow-sm"
              >
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                LinkedIn
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto sm:flex-initial min-w-[140px] inline-flex items-center justify-center gap-2 py-3 px-4 sm:px-6 border-2 sm:border-4 border-black text-black text-base sm:text-lg md:text-xl font-extrabold rounded-xl hover:bg-black hover:text-white active:scale-95 duration-150 shadow-sm bg-white"
              >
                <FaFileLines className="w-5 h-5 sm:w-6 sm:h-6" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
