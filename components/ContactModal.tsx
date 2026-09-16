'use client';

import React, { useEffect, useRef } from 'react';
import { personalInfo } from '@/data/portfolio';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa6';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const paneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && paneRef.current && !paneRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Dark backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 transition-opacity duration-300 backdrop-blur-xs"
          aria-hidden="true"
        />
      )}

      {/* Slide-up Contact Pane */}
      <div
        ref={paneRef}
        id="contact-me-pane"
        style={{
          left: 0,
          right: 0,
          overflowY: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxHeight: '90vh',
        }}
        className={`fixed bottom-0 duration-500 ease-in-out border-4 text-center border-yellow-400 border-b-0 p-5 sm:p-8 md:p-12 rounded-t-2xl sm:rounded-t-3xl bg-black text-white shadow-2xl z-50 w-full sm:w-11/12 max-w-3xl ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex justify-center mb-1 sm:mb-2">
          <div className="p-2.5 sm:p-3 bg-yellow-400/20 rounded-full text-yellow-400">
            <FaEnvelope className="h-7 w-7 sm:h-9 sm:w-9" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white">
          Let&apos;s Connect
        </div>
        <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-white hover:text-yellow-400 active:scale-95 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mt-6 sm:mt-8 text-left">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full py-3.5 px-4 bg-yellow-400 hover:bg-yellow-500 text-black text-lg sm:text-xl font-extrabold rounded-xl text-center duration-200 inline-flex items-center justify-center gap-2 shadow-md active:scale-98"
            >
              <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
              Email Me
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#0A66C2] hover:bg-[#084e96] text-white text-lg sm:text-xl font-extrabold rounded-xl text-center duration-200 inline-flex items-center justify-center gap-2 shadow-md active:scale-98"
            >
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-white text-lg sm:text-xl font-extrabold rounded-xl text-center duration-200 inline-flex items-center justify-center gap-2 border border-zinc-700 shadow-md active:scale-98"
            >
              <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              GitHub
            </a>
          </div>

          <div className="mt-6 p-4 sm:p-6 border-2 sm:border-4 border-yellow-400 rounded-xl bg-zinc-900">
            <div className="text-yellow-400 text-base sm:text-lg font-bold flex items-center gap-2">
              <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" /> Phone
            </div>
            <div className="text-white text-lg sm:text-2xl font-extrabold mt-1">{personalInfo.phone}</div>
            
            <div className="text-yellow-400 text-base sm:text-lg font-bold mt-4 flex items-center gap-2">
              <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" /> Email
            </div>
            <div className="text-white text-base sm:text-xl font-extrabold mt-1 break-all">{personalInfo.email}</div>
          </div>
        </div>
      </div>
    </>
  );
}
