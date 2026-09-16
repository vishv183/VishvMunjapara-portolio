'use client';

import React, { useEffect, useState, useRef } from 'react';
import { personalInfo } from '@/data/portfolio';

interface StickyNavProps {
  onOpenContact: () => void;
}

export default function StickyNav({ onOpenContact }: StickyNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const shouldBeVisible = window.scrollY > 180;
          if (shouldBeVisible !== isVisibleRef.current) {
            isVisibleRef.current = shouldBeVisible;
            setIsVisible(shouldBeVisible);
          }
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav
      id="nav-on-scroll"
      className={`fixed top-0 left-0 w-full p-4 bg-white border-b-2 border-black text-black z-40 transition-transform duration-250 ease-out hidden md:block ${
        isVisible ? 'translate-y-0 shadow-md' : '-translate-y-full pointer-events-none'
      }`}
      style={{
        willChange: 'transform',
        transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)',
      }}
    >
      <div className="w-12/12 sm:w-11/12 md:w-12/12 lg:w-9/12 col-centered flex items-center">
        <a
          href="/"
          onClick={(e) => handleSmoothScroll(e, 'top')}
          className="kill-link-style xl:mr-6"
        >
          <span className="inline-block rounded-md border-4 border-black text-black select-none p-2 text-2xl font-extrabold bg-transparent">
            {personalInfo.initials}
          </span>
        </a>
        <a
          href="/skills"
          onClick={(e) => handleSmoothScroll(e, 'skills')}
          className="inline-block kill-link-style ml-6 mr-3 text-2xl cursor-pointer underline--magical-2 font-extrabold text-black"
        >
          Skills
        </a>
        <a
          href="/projects"
          onClick={(e) => handleSmoothScroll(e, 'projects')}
          className="inline-block kill-link-style ml-6 mr-3 text-2xl cursor-pointer underline--magical-2 font-extrabold text-black"
        >
          Projects
        </a>
        <a
          href="/experience"
          onClick={(e) => handleSmoothScroll(e, 'experience')}
          className="inline-block kill-link-style ml-6 mr-3 text-2xl cursor-pointer underline--magical-2 font-extrabold text-black"
        >
          Experience
        </a>
        <a
          href="/contact"
          onClick={(e) => handleSmoothScroll(e, 'contact')}
          className="inline-block kill-link-style ml-6 mr-3 text-2xl cursor-pointer underline--magical-2 font-extrabold text-black"
        >
          Contact
        </a>
        <button
          type="button"
          onClick={onOpenContact}
          className="inline-block ml-auto text-xl cursor-pointer border-4 rounded-md px-4 p-2 border-black text-black hover:bg-black hover:text-white font-extrabold bg-transparent transition-colors duration-150"
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
}
