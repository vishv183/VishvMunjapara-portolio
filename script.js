// ===== Sticky Nav on scroll =====
function checkScrollPosition() {
    const nav = document.getElementById('nav-on-scroll');
    if (!nav) return;
    if (window.scrollY > 200) {
        nav.classList.remove('nav-top-hidden');
        nav.classList.add('nav-top-visible');
        nav.classList.remove('hidden');
    } else {
        nav.classList.add('nav-top-hidden');
        nav.classList.remove('nav-top-visible');
        nav.classList.add('hidden');
    }
}

window.addEventListener('scroll', checkScrollPosition);

// ===== Contact Slide-up =====
function toggleContactMe(action) {
    const pane = document.getElementById('contact-me-pane');
    if (action === 'show') {
        pane.classList.remove('contact-me-inactive');
        pane.classList.add('contact-me-active');
    } else {
        pane.classList.add('contact-me-inactive');
        pane.classList.remove('contact-me-active');
    }
}

// Close contact pane when clicking outside
document.addEventListener('click', function(e) {
    const pane = document.getElementById('contact-me-pane');
    if (pane && pane.classList.contains('contact-me-active')) {
        if (!pane.contains(e.target)) {
            toggleContactMe('hide');
        }
    }
});

// ===== Mobile Nav =====
function openMobileNav() {
    const nav = document.getElementById('mobile-nav');
    nav.classList.remove('offscreen-nav-hidden');
    nav.classList.add('offscreen-nav-visible');
    document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
    const nav = document.getElementById('mobile-nav');
    nav.classList.add('offscreen-nav-hidden');
    nav.classList.remove('offscreen-nav-visible');
    document.body.style.overflow = '';
}

function scrollToSection(id) {
    closeMobileNav();
    setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
}

// ===== Scroll Reveal =====
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
}

// ===== Typing effect on hero text =====
function typeEffect() {
    const titles = ['Backend Developer', 'AI Pipeline Builder', 'Real-Time Systems Engineer', 'Problem Solver'];
    let currentTitle = 0;
    let currentChar = 0;
    let isDeleting = false;
    const el = document.getElementById('typing-text');
    if (!el) return;

    function type() {
        const text = titles[currentTitle];
        if (isDeleting) {
            el.textContent = text.substring(0, currentChar - 1);
            currentChar--;
        } else {
            el.textContent = text.substring(0, currentChar + 1);
            currentChar++;
        }

        if (!isDeleting && currentChar === text.length) {
            setTimeout(() => { isDeleting = true; }, 1500);
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentTitle = (currentTitle + 1) % titles.length;
        }

        const speed = isDeleting ? 60 : 100;
        setTimeout(type, speed);
    }
    type();
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', function() {
    initScrollReveal();
    typeEffect();
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
