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
