/**
 * main.js — Entry point: initialises all modules from the ApexApp namespace.
 * Scripts are loaded before this file via <script> tags in index.html.
 */

document.addEventListener("DOMContentLoaded", () => {
  ApexApp.initNavbar();
  ApexApp.initAnimations();
  ApexApp.initCounters();
  ApexApp.initGallery();
  ApexApp.initContact();
});

document.querySelectorAll(".cert-dir-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;
    document.querySelectorAll(".cert-dir-tab").forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    document
      .querySelectorAll(".cert-dir-panel")
      .forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    document
      .querySelector(`.cert-dir-panel[data-panel="${target}"]`)
      .classList.add("active");
  });
});
