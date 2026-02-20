/**
 * navbar.js — Handles all navigation behaviour:
 *  - Scroll-to-solid background
 *  - Hamburger menu toggle
 *  - Active link highlighting on scroll
 *  - Close mobile menu on link click
 */

window.ApexApp = window.ApexApp || {};

ApexApp.initNavbar = function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // ---------- Scroll → solid navbar ----------
  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    highlightActiveLink();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // run once on load

  // ---------- Hamburger toggle ----------
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });

  // ---------- Close menu on mobile link click ----------
  document.querySelectorAll("#mobile-menu .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  });

  // ---------- Active link on scroll ----------
  function highlightActiveLink() {
    let currentId = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) currentId = section.id;
    });

    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active-link");
      }
    });
  }

  // ---------- Smooth scroll for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
};
