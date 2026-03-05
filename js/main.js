/**
 * RobustSpeechFlow Demo Page — Main Script
 *
 * Handles:
 *  - Navbar scroll shadow
 *  - Scroll-triggered fade-in animations
 *  - Demo benchmark tab filtering
 */

(function () {
  'use strict';

  // ── Navbar: add shadow on scroll ──
  var nav = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  });

  // ── Fade-in: reveal elements when they enter the viewport ──
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });

  // ── Demo tabs: filter audio samples by benchmark ──
  var tabs = document.querySelectorAll('.demo-tab');
  var groups = document.querySelectorAll('.demo-group');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var filter = this.getAttribute('data-bench');

      tabs.forEach(function (t) { t.classList.remove('active'); });
      this.classList.add('active');

      groups.forEach(function (group) {
        var bench = group.getAttribute('data-bench');
        if (filter === 'all' || bench === filter) {
          group.classList.remove('hidden');
        } else {
          group.classList.add('hidden');
        }
      });
    });
  });
})();
