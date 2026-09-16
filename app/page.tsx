'use client';

import React, { useState, useEffect } from 'react';
import StickyNav from '@/components/StickyNav';
import MobileNav from '@/components/MobileNav';
import ContactModal from '@/components/ContactModal';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathSection = window.location.pathname.replace(/^\/+|\/+$/g, '');
      const hashSection = window.location.hash.replace(/^#/, '');
      const target = pathSection || hashSection;

      if (target && ['skills', 'projects', 'experience', 'contact'].includes(target)) {
        const targetEl = document.getElementById(target);
        if (targetEl) {
          setTimeout(() => {
            targetEl.scrollIntoView({ behavior: 'smooth' });
            window.history.replaceState(null, '', `/${target}`);
          }, 150);
        }
      } else if (hashSection) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  }, []);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const handleOpenMobileNav = () => setIsMobileNavOpen(true);
  const handleCloseMobileNav = () => setIsMobileNavOpen(false);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 selection:bg-indigo-500 selection:text-white">
      {/* Sticky Navigation (Appears on Scroll) */}
      <StickyNav onOpenContact={handleOpenContact} />

      {/* Slide-up Contact Drawer / Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onOpen={handleOpenMobileNav}
        onClose={handleCloseMobileNav}
        onOpenContact={handleOpenContact}
      />

      {/* Hero & Top Navigation */}
      <Hero onOpenContact={handleOpenContact} />

      {/* Technical Skills Section */}
      <Skills />

      {/* Detailed Projects Section */}
      <Projects />

      {/* Experience & Education Section */}
      <Experience />

      {/* Contact & Let's Work Together Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
