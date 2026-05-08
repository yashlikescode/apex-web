// Dynamic Product Showcase with Image Carousel
const productShowcaseData = {
  pcc: {
    title: "Power Control Centre (PCC)",
    description:
      "Comprehensive power distribution and control for industrial operations. Built for performance and reliability with advanced protection mechanisms.",
    images: [
      { name: "PCC Panel -1.png", folder: "1.PCC Panels" },
      { name: "PCC Panel -2.png", folder: "1.PCC Panels" },
      { name: "PCC Panel - 3.png", folder: "1.PCC Panels" },
    ],
  },
  mcc: {
    title: "Motor Control Centre (MCC)",
    description:
      "Specialized electrical panel for centralized motor control. Each motor receives dedicated drawer with contactor, overload relay, and protective fuses.",
    images: [
      { name: "MCC Panel -1.png", folder: "2.MCC Panels" },
      { name: "MCC Panel-2.png", folder: "2.MCC Panels" },
      { name: "MCC Panel-3.png", folder: "2.MCC Panels" },
    ],
  },
  pdb: {
    title: "Power Distribution Board (PDB)",
    description:
      "Optimal electrical distribution with superior safety and reliability. Designed for commercial and industrial applications with advanced protection.",
    images: [
      { name: "PDB Panel -1.png", folder: "3.PDB Panels" },
      { name: "PDB Panel -2.png", folder: "3.PDB Panels" },
      { name: "PDB Panel - 3.jpeg", folder: "3.PDB Panels" },
    ],
  },
  ldb: {
    title: "Load Distribution Board (LDB)",
    description:
      "Complex electrical network management with precision and safety. Provides flexible load sharing, fault isolation, and seamless scalability.",
    images: [
      { name: "LDB -3.png", folder: "4.LDB Panel" },
      { name: "LDB Panel -1.png", folder: "4.LDB Panel" },
      { name: "LDB Panel -2.png", folder: "4.LDB Panel" },
    ],
  },
  vfd: {
    title: "Variable Frequency Drive (VFD)",
    description:
      "Energy-efficient motor control with intelligent frequency modulation. Reduces energy consumption and extends equipment life with smooth acceleration.",
    images: [
      { name: "VFD Panel -1.png", folder: "5.VFD Panel" },
      { name: "VFD Panel -3.png", folder: "5.VFD Panel" },
      { name: "VFD panle -2.png", folder: "5.VFD Panel" },
    ],
  },
  sync: {
    title: "Synchronization Panel",
    description:
      "Seamless parallel operation of multiple generators. Ensures voltage and frequency alignment, minimizing stress and maximizing system reliability.",
    images: [
      { name: "Synchronization P _ 1.png", folder: "6.Snchronization Panel" },
      {
        name: "Synchronization panel - 2.png",
        folder: "6.Snchronization Panel",
      },
    ],
  },
  apfc: {
    title: "Automatic Power Factor Correction (APFC)",
    description:
      "Optimizes power factor automatically, reducing reactive power consumption. Intelligent correction adapts to load changes for maximum efficiency.",
    images: [
      { name: "APFC Panel -1.png", folder: "7.APFC Panel" },
    ],
  },
  busduct: {
    title: "Busduct Systems",
    description:
      "High-capacity power distribution with minimal voltage drop. Modular busduct solutions for flexible routing and efficient installation.",
    images: [
      { name: "Busduct -1.png", folder: "8.Busduct" },
      { name: "Busduct -2.png", folder: "8.Busduct" },
      { name: "Busdutc-3.png", folder: "8.Busduct" },
      { name: "Bust Duct-4.png", folder: "8.Busduct" },
    ],
  },
  imcc: {
    title: "Integrated Motor Control Center (IMCC)",
    description:
      "Advanced integrated motor control with comprehensive management features. Combines power distribution and motor protection in one unit.",
    images: [
      { name: "IMCC panel -1.png", folder: "9.IMCC" },
    ],
  },
  ups: {
    title: "Industrial UPS",
    description:
      "Uninterruptible Power Supply for critical industrial applications. Reliable backup power ensuring continuous operation during power disruptions.",
    images: [
      { name: "UPS-1.jpeg", folder: "10.Industrial UPS" },
      { name: "Vertive UPS-2.jpeg", folder: "10.Industrial UPS" },
      { name: "UPS Panrl -3.png", folder: "10.Industrial UPS" },
    ],
  },
};

class DynamicProductShowcase {
  constructor() {
    this.currentProduct = "pcc";
    this.currentImageIndex = 0;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderContent("pcc");
  }

  setupEventListeners() {
    // Tab click handlers
    const tabs = document.querySelectorAll(".product-tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const productKey = tab.dataset.product;
        this.switchProduct(productKey);
      });
    });
  }

  switchProduct(productKey) {
    if (!productShowcaseData[productKey]) return;

    this.currentProduct = productKey;
    this.currentImageIndex = 0;

    // Update active tab
    document.querySelectorAll(".product-tab").forEach((tab) => {
      tab.classList.remove("active");
      if (tab.dataset.product === productKey) {
        tab.classList.add("active");
      }
    });

    // Update content
    this.renderContent(productKey);
  }

  renderContent(productKey) {
    const product = productShowcaseData[productKey];
    const contentContainer = document.getElementById("product-content");

    if (!product) return;

    const imageCardsHTML = product.images
      .map((img, index) => {
        const imagePath = `images/products/${img.folder}/${img.name}`;
        const imageTitle = `${product.title} - Image ${index + 1}`;
        return `
        <button
          type="button"
          class="thumbnail-thumb product-image-card"
          data-index="${index}"
          data-src="${imagePath}"
          data-title="${imageTitle}"
          aria-label="Open ${imageTitle}"
        >
          <img src="${imagePath}" alt="${imageTitle}" loading="lazy" />
        </button>
      `;
      })
      .join("");

    contentContainer.innerHTML = `
      <h2 class="product-title">${product.title}</h2>
      <p class="product-description">${product.description}</p>

      <div class="carousel-thumbnails product-image-grid" id="carousel-thumbnails">
        ${imageCardsHTML}
      </div>
    `;

    this.attachImageListeners();
  }

  attachImageListeners() {
    const imageCards = document.querySelectorAll(".product-image-card");

    imageCards.forEach((card) => {
      card.addEventListener("click", () => {
        this.openProductLightbox(card.dataset.src, card.dataset.title);
      });
    });
  }

  openProductLightbox(src, title) {
    const lightbox = document.getElementById("lightbox");
    const lbTitle = document.getElementById("lb-title");
    const lbDesc = document.getElementById("lb-desc");
    const lbMedia = document.querySelector("#lightbox-content > div");

    if (!lightbox || !lbTitle || !lbDesc || !lbMedia) return;

    lbTitle.textContent = title;
    lbDesc.textContent = "Product Image";
    lbMedia.innerHTML = "";
    lbMedia.style.background = "transparent";
    lbMedia.className = "lightbox-media";

    const img = document.createElement("img");
    img.src = src;
    img.alt = title;
    img.className = "lightbox-image";
    img.loading = "eager";
    lbMedia.appendChild(img);

    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new DynamicProductShowcase();
});
