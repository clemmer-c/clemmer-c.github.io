/* Cayden Clemmer — portfolio behaviour
   Three jobs: the mobile menu, scroll reveals, and click-to-load 3D. */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------------------------------------------------------------- nav -- */

  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');

  if (toggle && links) {
    var setOpen = function (open) {
      links.setAttribute('data-open', open ? 'true' : 'false');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    toggle.addEventListener('click', function () {
      setOpen(links.getAttribute('data-open') !== 'true');
    });

    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.getAttribute('data-open') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    // A resize past the breakpoint should clear the mobile state.
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 900) setOpen(false);
    });
  }

  /* ----------------------------------------------------------- reveals -- */

  var revealables = document.querySelectorAll('.reveal, .stagger');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(revealables, function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    Array.prototype.forEach.call(revealables, function (el) {
      // Anything already on screen at load reveals immediately rather than
      // waiting for a scroll that may never come.
      var box = el.getBoundingClientRect();
      if (box.top < window.innerHeight * 0.9) {
        el.classList.add('is-in');
      } else {
        io.observe(el);
      }
    });
  }

  /* -------------------------------------------------- click-to-load 3D -- */
  /* The SketchFab iframe is heavy. The page ships the technical drawing and
     only pulls the real model in when someone asks for it. */

  Array.prototype.forEach.call(document.querySelectorAll('.embed'), function (embed) {
    var button = embed.querySelector('.embed__load');
    var frame = embed.querySelector('.embed__frame');
    if (!button || !frame) return;

    button.addEventListener('click', function () {
      var src = frame.getAttribute('data-src');
      if (src && !frame.getAttribute('src')) frame.setAttribute('src', src);
      embed.setAttribute('data-loaded', 'true');
      frame.focus({ preventScroll: true });
    });
  });

  /* On a case-study page the viewer is the point, so load it as soon as it
     is close to the viewport instead of waiting for a click. */

  var eager = document.querySelector('.viewer__stage iframe[data-src]');
  if (eager) {
    var load = function () {
      if (!eager.getAttribute('src')) eager.setAttribute('src', eager.getAttribute('data-src'));
    };
    if ('IntersectionObserver' in window) {
      var vio = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { load(); vio.disconnect(); }
      }, { rootMargin: '400px' });
      vio.observe(eager);
    } else {
      load();
    }
  }

  /* -------------------------------------------------------------- year -- */

  Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
