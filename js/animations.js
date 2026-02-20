/**
 * animations.js — IntersectionObserver-powered scroll reveal,
 *                  hero underline trigger, and counter animation
 */

window.ApexApp = window.ApexApp || {};

ApexApp.initAnimations = function initAnimations() {
  // ---- Scroll-reveal: .reveal, .reveal-left, .reveal-right ----
  const revealEls = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right",
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target); // fire once
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  // ---- Hero underline animation ----
  const heroHighlight = document.querySelector(".hero-title .highlight");
  if (heroHighlight) {
    setTimeout(() => heroHighlight.classList.add("animate-underline"), 600);
  }
};

/**
 * Animate a counter from 0 → target in the given element
 * @param {HTMLElement} el
 * @param {number} target
 * @param {string} suffix  e.g. '+', '%', 'k'
 * @param {number} duration ms
 */
ApexApp.animateCounter = function animateCounter(
  el,
  target,
  suffix = "",
  duration = 1600,
) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
};

/**
 * Wire up counters when the stats section enters the viewport
 */
ApexApp.initCounters = function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.counter, 10);
          const suffix = el.dataset.suffix || "";
          ApexApp.animateCounter(el, target, suffix);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((el) => counterObserver.observe(el));
};
