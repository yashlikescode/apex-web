/**
 * gallery.js — Gallery tabs, filtering, and lightbox
 */

window.ApexApp = window.ApexApp || {};

const GALLERY_DATA = [
  // Manufacturing Facility
  {
    category: "facility",
    title: "Manufacturing Floor",
    desc: "State-of-the-art assembly & wiring bay",
    icon: "🏭",
    color: "#1E3A5F",
    accent: "#3B82F6",
  },
  {
    category: "facility",
    title: "Quality Testing Lab",
    desc: "In-house testing & inspection area",
    icon: "🔬",
    color: "#1B3A5C",
    accent: "#60A5FA",
  },
  {
    category: "facility",
    title: "Design & Engineering",
    desc: "CAD-driven panel design workspace",
    icon: "📐",
    color: "#162F4A",
    accent: "#93C5FD",
  },
  // Control Panels
  {
    category: "control",
    title: "PLC Control Panel",
    desc: "Custom PLC panel for industrial automation",
    icon: "⚡",
    color: "#1A2E4A",
    accent: "#F97316",
  },
  {
    category: "control",
    title: "Motor Control Centre",
    desc: "MCC panel – 415V, multi-feeder configuration",
    icon: "🔧",
    color: "#1E3550",
    accent: "#FB923C",
  },
  {
    category: "control",
    title: "Automation Panel",
    desc: "Integrated automation & SCADA-ready panel",
    icon: "🖥️",
    color: "#162D46",
    accent: "#F97316",
  },
  // LT Panels
  {
    category: "lt",
    title: "LT Main Distribution Panel",
    desc: "Tested up to 415V, 6000A, IP54 rated",
    icon: "⚙️",
    color: "#1A3050",
    accent: "#34D399",
  },
  {
    category: "lt",
    title: "APFC Panel",
    desc: "Automatic Power Factor Correction panel",
    icon: "📊",
    color: "#163048",
    accent: "#6EE7B7",
  },
  {
    category: "lt",
    title: "Power Control Centre",
    desc: "PCC with bus couplers & feeder compartments",
    icon: "🔌",
    color: "#183254",
    accent: "#10B981",
  },
  // VFD Panels
  {
    category: "vfd",
    title: "Yaskawa VFD Panel – 45kW",
    desc: "Energy-efficient motor drive, IP42",
    icon: "🌀",
    color: "#1C2E50",
    accent: "#A78BFA",
  },
  {
    category: "vfd",
    title: "Multi-Drive VFD Cabinet",
    desc: "22kW–250kW configuration with bypass",
    icon: "🔋",
    color: "#19284C",
    accent: "#C4B5FD",
  },
  // Installations
  {
    category: "install",
    title: "Steel Plant Installation",
    desc: "Complete switchgear room, JSR steel plant",
    icon: "🏗️",
    color: "#1B2E4C",
    accent: "#FCD34D",
  },
  {
    category: "install",
    title: "Commercial Complex",
    desc: "LT distribution panels, multi-storey building",
    icon: "🏢",
    color: "#172A48",
    accent: "#FBBF24",
  },
  {
    category: "install",
    title: "Water Treatment Plant",
    desc: "Outdoor panels and MCC, IP65 rated",
    icon: "💧",
    color: "#1A3050",
    accent: "#38BDF8",
  },
];

const TABS = [
  { id: "all", label: "All Projects" },
  { id: "facility", label: "Facility" },
  { id: "control", label: "Control Panels" },
  { id: "lt", label: "LT Panels" },
  { id: "vfd", label: "VFD Panels" },
  { id: "install", label: "Installations" },
];

ApexApp.initGallery = function initGallery() {
  const tabsContainer = document.getElementById("gallery-tabs");
  const gridContainer = document.getElementById("gallery-grid");
  const lightbox = document.getElementById("lightbox");
  const lbTitle = document.getElementById("lb-title");
  const lbDesc = document.getElementById("lb-desc");
  const lbClose = document.getElementById("lb-close");

  if (!tabsContainer || !gridContainer) return;

  let activeTab = "all";

  // Build tabs
  TABS.forEach((tab) => {
    const btn = document.createElement("button");
    btn.className = `gallery-tab-btn${tab.id === "all" ? " active" : ""}`;
    btn.textContent = tab.label;
    btn.dataset.tab = tab.id;
    btn.addEventListener("click", () => switchTab(tab.id));
    tabsContainer.appendChild(btn);
  });

  // Initial render
  renderGallery("all");

  function switchTab(tabId) {
    activeTab = tabId;
    tabsContainer.querySelectorAll(".gallery-tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });
    renderGallery(tabId);
  }

  function renderGallery(filter) {
    const items =
      filter === "all"
        ? GALLERY_DATA
        : GALLERY_DATA.filter((item) => item.category === filter);

    gridContainer.innerHTML = "";
    items.forEach((item, i) => {
      const el = createGalleryItem(item, i);
      gridContainer.appendChild(el);
    });
  }

  function createGalleryItem(item, index) {
    const div = document.createElement("div");
    div.className = "gallery-item reveal";
    div.style.transitionDelay = `${(index % 6) * 0.06}s`;
    div.innerHTML = `
      <div class="gallery-item-inner" style="background: linear-gradient(135deg, ${item.color}, #0A1628);">
        <span style="font-size: 3rem; margin-bottom: 0.5rem;">${item.icon}</span>
        <div style="width: 60%; height: 2px; background: ${item.accent}; border-radius: 4px; opacity: 0.5;"></div>
      </div>
      <div class="gallery-overlay">
        <h4 class="text-white font-semibold text-sm">${item.title}</h4>
        <p class="gallery-desc text-gray-300 text-xs mt-0.5">${item.desc}</p>
      </div>
    `;
    div.addEventListener("click", () => openLightbox(item));

    // Trigger reveal animation after a tiny delay
    setTimeout(
      () => {
        div.classList.add("visible");
      },
      50 + index * 60,
    );

    return div;
  }

  // Lightbox
  function openLightbox(item) {
    lbTitle.textContent = item.title;
    lbDesc.textContent = item.desc;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  lbClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
};
