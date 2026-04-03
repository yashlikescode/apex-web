/**
 * gallery.js - Section-based gallery rendering and lightbox
 */

window.ApexApp = window.ApexApp || {};

const GALLERY_SECTIONS = [
  {
    id: "featured",
    label: "Featured Panels",
    eyebrow: "Core Portfolio",
    description:
      "A quick view of some of Apex Marketing's panel types and completed assemblies.",
    accent: "orange",
    images: [
      { src: "gallery/starters.jpg", title: "Starters Panel" },
      { src: "gallery/pmcc.jpeg", title: "PMCC Panel" },
      { src: "gallery/apfc.jpeg", title: "APFC Panel" },
      { src: "gallery/ldb.jpeg", title: "LDB Panel" },
      { src: "gallery/mcc.jpeg", title: "MCC Panel" },
    ],
  },
  {
    id: "pcc",
    label: "PCC Panels",
    eyebrow: "Power Control Centre",
    description:
      "Power control centre builds for industrial distribution and feeder management.",
    accent: "blue",
    images: [
      { src: "gallery/pcc/pcc panel.jpg", title: "PCC Panel" },
      { src: "gallery/pcc/pcc-1.jpg", title: "PCC Panel View 1" },
      { src: "gallery/pcc/pcc-2.jpg", title: "PCC Panel View 2" },
      { src: "gallery/pcc/pcc-5.jpeg", title: "PCC Lineup" },
      { src: "gallery/pcc/pcc.jpeg", title: "PCC Assembly" },
      { src: "gallery/pcc/pcc6.jpeg", title: "PCC Shop Floor View" },
    ],
  },
  {
    id: "pdb",
    label: "PDB Panels",
    eyebrow: "Power Distribution Board",
    description:
      "Distribution board executions covering multiple enclosure layouts and feeder configurations.",
    accent: "orange",
    images: [
      { src: "gallery/pdb/pdb.jpeg", title: "PDB Panel" },
      { src: "gallery/pdb/pdb panel.jpg", title: "PDB Panel Front" },
      { src: "gallery/pdb/pdb panel-1.jpg", title: "PDB Panel Detail" },
      { src: "gallery/pdb/pdb 3.jpg", title: "PDB Assembly 3" },
      { src: "gallery/pdb/pdb 7.jpeg", title: "PDB Assembly 7" },
      { src: "gallery/pdb/pdb -5.jpeg", title: "PDB Assembly 5" },
      { src: "gallery/pdb/pdb & mcc.jpeg", title: "PDB and MCC Setup" },
    ],
  },
  {
    id: "vfd",
    label: "VFD Panels",
    eyebrow: "Drive Systems",
    description:
      "Variable frequency drive panel installations designed for motor control and energy efficiency.",
    accent: "blue",
    images: [
      { src: "gallery/vfd/vfd lineup.jpeg", title: "VFD Lineup" },
      {
        src: "gallery/vfd/VFD PANEL SREE - Copy - Copy.jpg",
        title: "VFD Panel Cabinet",
      },
    ],
  },
  {
    id: "office",
    label: "Office & Facility",
    eyebrow: "Team and Workplace",
    description:
      "Photos from the Apex office and day-to-day working environment.",
    accent: "orange",
    images: [
      { src: "gallery/office/IMG_9175.jpeg", title: "Office Interior 1" },
      { src: "gallery/office/IMG_9177.jpeg", title: "Office Interior 2" },
      { src: "gallery/office/IMG_9179.jpeg", title: "Office Interior 3" },
      { src: "gallery/office/IMG_9180.jpeg", title: "Office Interior 4" },
      { src: "gallery/office/IMG_9182.jpeg", title: "Office Interior 5" },
      {
        src: "gallery/office/WhatsApp Image 2026-01-24 at 19.16.32.jpeg",
        title: "Office Workspace 1",
      },
      {
        src: "gallery/office/WhatsApp Image 2026-01-24 at 19.16.33.jpeg",
        title: "Office Workspace 2",
      },
      {
        src: "gallery/office/WhatsApp Image 2026-01-24 at 19.16.34 (1).jpeg",
        title: "Office Workspace 3",
      },
      {
        src: "gallery/office/WhatsApp Image 2026-01-24 at 19.16.34.jpeg",
        title: "Office Workspace 4",
      },
      {
        src: "gallery/office/WhatsApp Image 2026-01-24 at 19.16.35.jpeg",
        title: "Office Workspace 5",
      },
      {
        src: "gallery/office/WhatsApp Image 2026-01-24 at 19.35.28.jpeg",
        title: "Office Workspace 6",
      },
      {
        src: "gallery/office/WhatsApp Image 2026-01-24 at 19.35.28 (1).jpeg",
        title: "Office Workspace 7",
      },
      {
        src: "gallery/office/WhatsApp Image 2026-03-03 at 12.34.19.jpeg",
        title: "Office Workspace 8",
      },
    ],
  },
];

ApexApp.initGallery = function initGallery() {
  const sectionsContainer = document.getElementById("gallery-sections");
  const lightbox = document.getElementById("lightbox");
  const lbTitle = document.getElementById("lb-title");
  const lbDesc = document.getElementById("lb-desc");
  const lbClose = document.getElementById("lb-close");

  if (!sectionsContainer || !lightbox || !lbTitle || !lbDesc || !lbClose) {
    return;
  }

  const lbMedia = lightbox.querySelector("#lightbox-content > div");
  renderSections();

  function renderSections() {
    sectionsContainer.innerHTML = "";

    GALLERY_SECTIONS.forEach((section) => {
      const sectionEl = document.createElement("section");
      sectionEl.className = "gallery-section-card";
      sectionEl.innerHTML = `
        <div class="gallery-section-head">
          <div>
            <p class="gallery-section-eyebrow">${section.eyebrow}</p>
            <h3 class="gallery-section-title">${section.label}</h3>
          </div>
          <div class="gallery-section-meta">
            <span class="gallery-section-count gallery-section-count-${section.accent}">
              ${section.images.length} Photos
            </span>
            <p class="gallery-section-copy">${section.description}</p>
          </div>
        </div>
        <div class="gallery-photo-grid"></div>
      `;

      const grid = sectionEl.querySelector(".gallery-photo-grid");

      section.images.forEach((image, index) => {
        const photo = document.createElement("button");
        photo.type = "button";
        photo.className = "gallery-photo-card";
        photo.setAttribute("aria-label", `Open ${image.title}`);
        photo.style.animationDelay = `${index * 0.05}s`;
        photo.innerHTML = `
          <span class="gallery-photo-frame">
            <img
              src="${image.src}"
              alt="${image.title}"
              class="gallery-photo-image"
              loading="lazy"
            />
            <span class="gallery-photo-overlay">
              <span class="gallery-photo-label">${image.title}</span>
            </span>
          </span>
        `;
        photo.addEventListener("click", () => openLightbox(section, image));
        grid.appendChild(photo);
      });

      sectionsContainer.appendChild(sectionEl);
    });
  }

  function openLightbox(section, image) {
    lbTitle.textContent = image.title;
    lbDesc.textContent = `${section.label} Gallery`;

    if (lbMedia) {
      lbMedia.innerHTML = "";
      lbMedia.style.background = "transparent";
      lbMedia.className = "lightbox-media";

      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.title;
      img.className = "lightbox-image";
      img.loading = "eager";
      lbMedia.appendChild(img);
    }

    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  lbClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
};
