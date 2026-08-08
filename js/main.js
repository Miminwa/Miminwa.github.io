/* ============================================
   MIRACLE CHIMAMANDA NDUBUISI - PORTFOLIO JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Nav scroll effect ---
  const nav = document.querySelector('.nav');

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }


  // --- Mobile nav toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {

    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.classList.remove('active');
      });
    });

  }


  // --- Active nav link ---
  const currentPage =
    window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(link => {

    const href = link.getAttribute('href');

    if (
      href === currentPage ||
      (currentPage === '' && href === 'index.html')
    ) {
      link.classList.add('active');
    }

  });


  // --- Scroll fade-in animation ---
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    fadeElements.forEach(element => {
      observer.observe(element);
    });

  } else {

    // Fallback for browsers without IntersectionObserver
    fadeElements.forEach(element => {
      element.classList.add('visible');
    });

  }


  // --- Current year in footer ---
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});