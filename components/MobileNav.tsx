'use client';

import React, { useEffect } from 'react';
import { personalInfo } from '@/data/portfolio';

interface MobileNavProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function MobileNav({
  isOpen,
  onOpen,
  onClose,
  onOpenContact,
}: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  const handleNavigate = (id: string) => {
    onClose();
    setTimeout(() => {
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
    }, 200);
  };

  const handleConnectClick = () => {
    onClose();
    onOpenContact();
  };

  return (
    <>
      {/* Mobile Top Header (Fixed with 0 backdrop-blur lag) */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b-2 border-black z-40 flex items-center justify-between px-4 md:hidden shadow-xs">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState(null, '', '/');
          }}
          className="kill-link-style flex items-center"
        >
          <span className="rounded-md border-2 border-black text-black select-none px-2 py-1 text-xl font-extrabold bg-transparent">
            {personalInfo.initials}
          </span>
        </a>
        <button
          type="button"
          onClick={onOpen}
          aria-label="Open navigation menu"
          className="p-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-lg border-2 border-black flex items-center justify-center cursor-pointer transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </header>

      {/* Spacer for fixed mobile header */}
      <div className="h-16 block md:hidden" />

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-50 md:hidden transition-opacity duration-200"
          aria-hidden="true"
        />
      )}

      {/* Mobile Nav Slide-in Drawer */}
      <div
        id="mobile-nav"
        className={`fixed inset-y-0 right-0 w-4/5 max-w-sm bg-[#fafafa] border-l-4 border-black z-50 md:hidden flex flex-col justify-between p-6 shadow-2xl transition-transform duration-250 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Top */}
          <div className="flex items-center justify-between pb-6 border-b-2 border-black">
            <span className="rounded-md border-2 border-black text-black select-none px-2 py-1 text-xl font-extrabold bg-white">
              {personalInfo.initials}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 text-black hover:text-red-600 rounded-lg active:scale-95 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 flex flex-col gap-6 text-left">
            <button
              type="button"
              onClick={() => handleNavigate('skills')}
              className="text-2xl font-extrabold text-black hover:translate-x-2 text-left transition-transform duration-150 py-1"
            >
              <span className="underline--magical">Skills</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('projects')}
              className="text-2xl font-extrabold text-black hover:translate-x-2 text-left transition-transform duration-150 py-1"
            >
              <span className="underline--magical">Projects</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('experience')}
              className="text-2xl font-extrabold text-black hover:translate-x-2 text-left transition-transform duration-150 py-1"
            >
              <span className="underline--magical">Experience</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('contact')}
              className="text-2xl font-extrabold text-black hover:translate-x-2 text-left transition-transform duration-150 py-1"
            >
              <span className="underline--magical">Contact</span>
            </button>
          </div>
        </div>

        {/* Drawer Footer / CTA */}
        <div className="pt-6 border-t-2 border-black flex flex-col gap-3">
          <button
            type="button"
            onClick={handleConnectClick}
            className="w-full py-3.5 bg-yellow-400 text-black border-2 border-black rounded-xl text-lg font-extrabold hover:bg-black hover:text-yellow-400 active:scale-95 transition-all shadow-sm text-center"
          >
            Contact Me
          </button>
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-white text-black border-2 border-black rounded-xl text-base font-bold text-center hover:bg-gray-100 active:scale-95 transition-all"
          >
            Download Resume ↗
          </a>
        </div>
      </div>
    </>
  );
}
