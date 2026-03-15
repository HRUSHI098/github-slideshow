/* ===========================
   Interactive Features
   =========================== */

(function () {
  'use strict';

  // --- Theme ---
  const THEME_KEY = 'theme';
  const html = document.documentElement;

  function getTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀' : '☽';
  }

  applyTheme(getTheme());

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getTheme());

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        const current = html.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    // --- Scrolled nav ---
    const nav = document.querySelector('.nav');
    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 10);
      });
    }

    // --- Mobile menu ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    if (menuToggle && mobileNav) {
      menuToggle.addEventListener('click', function () {
        const open = mobileNav.classList.toggle('open');
        menuToggle.classList.toggle('open', open);
        menuToggle.setAttribute('aria-expanded', String(open));
      });
    }

    // --- Active nav link ---
    const path = window.location.pathname;
    document.querySelectorAll('[data-nav-link]').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href && (path === href || (href !== '/' && path.startsWith(href)))) {
        link.classList.add('active');
      }
    });

    // --- Fade-in-up on scroll ---
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.observe').forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });

    // --- Blog filter ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card[data-tags]');

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        const tag = btn.getAttribute('data-filter');

        blogCards.forEach(function (card) {
          const tags = card.getAttribute('data-tags') || '';
          if (!tag || tag === 'all' || tags.includes(tag)) {
            card.style.display = '';
            setTimeout(function () { card.style.opacity = '1'; card.style.transform = ''; }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.96)';
            setTimeout(function () { card.style.display = 'none'; }, 200);
          }
        });
      });
    });

    // --- Contact form (demo) ---
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        if (btn) {
          btn.textContent = 'Sending...';
          btn.disabled = true;
        }
        setTimeout(function () {
          form.style.display = 'none';
          const success = document.getElementById('form-success');
          if (success) {
            success.style.display = 'block';
            success.style.animation = 'fadeIn 0.4s ease';
          }
        }, 1200);
      });
    }

    // --- Reading progress bar ---
    const progressBar = document.getElementById('reading-progress');
    if (progressBar) {
      window.addEventListener('scroll', function () {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        progressBar.style.width = progress + '%';
      });
    }
  });
})();
