// Dynamic Product Showcase with Image Carousel
const productShowcaseData = {
  pcc: {
    title: "Power Control Centre (PCC)",
    description:
      "The first point of electrical entry in any facility. Receives high-voltage supply from the utility transformer, houses the main circuit breaker, and distributes power through heavy copper busbars to all downstream panels — MCC, lighting, HVAC, and more. Think of it as the master switchboard of your entire plant or building.",
    images: [
      { name: "PCC Panel -1.png", folder: "1.PCC Panels" },
      { name: "PCC Panel -2.png", folder: "1.PCC Panels" },
      { name: "PCC Panel - 3.png", folder: "1.PCC Panels" },
    ],
  },
  mcc: {
    title: "Motor Control Centre (MCC)",
    description:
      "A dedicated panel for starting, stopping, and protecting electric motors. Each motor gets its own drawer with a contactor, overload relay, and fuses — all in one cabinet. Centralized controls make operations safer and maintenance faster. A must-have in any facility with multiple pumps, fans, compressors, or conveyors.",
    images: [
      { name: "MCC Panel -1.png", folder: "2.MCC Panels" },
      { name: "MCC Panel-2.png", folder: "2.MCC Panels" },
      { name: "MCC Panel-3.png", folder: "2.MCC Panels" },
    ],
  },
  pdb: {
    title: "Power Distribution Board (PDB)",
    description:
    "A mid-level distribution panel that takes bulk power from the PCC and divides it into individual circuits for different zones, floors, or equipment groups. Each outgoing circuit has its own MCB or MCCB for protection. Think of it as the 'router' of your electrical network — directing the right power to the right place.",
    images: [
      { name: "PDB Panel -1.png", folder: "3.PDB Panels" },
      { name: "PDB Panel -2.png", folder: "3.PDB Panels" },
      { name: "PDB Panel - 3.jpeg", folder: "3.PDB Panels" },
    ],
  },
  ldb: {
    title: "Load Distribution Board (LDB)",
    description:
    "A purpose-built board exclusively for lighting circuits, kept separate from power circuits for safety and easy fault isolation. A tripped lighting MCB won't affect machines — and vice versa. Sized for lower current loads with individual MCBs per zone. Mandatory in commercial and industrial buildings per IS standards.",
    images: [
      { name: "LDB -3.png", folder: "4.LDB Panel" },
      { name: "LDB Panel -1.png", folder: "4.LDB Panel" },
      { name: "LDB Panel -2.png", folder: "4.LDB Panel" },
    ],
  },
  vfd: {
    title: "Variable Frequency Drive (VFD)",
    description:
    "A VFD controls motor speed by varying the electrical frequency — instead of always running at 100%, motors run at exactly the required speed. This delivers up to 50% energy savings on pumps, fans, and compressors. Internally converts AC → DC → variable AC. Includes soft-start, overload protection, and often eliminates mechanical throttle valves entirely.",
    images: [
      { name: "VFD Panel -1.png", folder: "5.VFD Panel" },
      { name: "VFD Panel -3.png", folder: "5.VFD Panel" },
      { name: "VFD panle -2.png", folder: "5.VFD Panel" },
    ],
  },
  sync: {
    title: "Synchronization Panel",
    description:
    "When two or more generators need to share load simultaneously, they must match on voltage, frequency, and phase angle before connecting. A synchronization panel monitors and matches all three parameters automatically before closing the breaker. Connecting out-of-sync generators can destroy both machines — this panel prevents that. Essential for DG paralleling and captive power plants.",
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
    "Low power factor means hidden penalty charges on your electricity bill. An APFC panel automatically switches capacitor banks in or out to keep power factor near 1.0. The built-in relay controller monitors PF continuously and responds in seconds. Most customers see an 8–15% reduction in electricity bills — the panel typically pays for itself in months.",
    images: [{ name: "APFC Panel -1.png", folder: "7.APFC Panel" }],
  },
  busduct: {
    title: "Busduct Systems",
    description:
    "A prefabricated metal enclosure containing copper or aluminium busbars, used to carry very high currents (400A–6300A) across long distances inside a building. It replaces costly, cumbersome cable runs. Tap-off boxes at regular intervals allow machines to connect without cutting or splicing. Safer, neater, and far easier to expand than traditional multi-cable installations.",
    images: [
      // { name: "Busduct -1.png", folder: "8.Busduct" },
      // { name: "Busduct -2.png", folder: "8.Busduct" },
      // { name: "Busdutc-3.png", folder: "8.Busduct" },
      // { name: "Bust Duct-4.png", folder: "8.Busduct" },
    ],
  },
  imcc: {
    title: "Intelligent Motor Control Center (IMCC)",
    description:
    "An IMCC is a traditional MCC upgraded with digital intelligence. Smart relays in each drawer report motor current, voltage, temperature, and faults digitally over Modbus or Profibus to a PLC. All data is visible on an HMI or SCADA screen in real time. Enables remote start/stop, predictive maintenance alerts, and energy logging — the foundation of an Industry 4.0 facility.",
    images: [{ name: "IMCC panel -1.png", folder: "9.IMCC" }],
  },
  ups: {
    title: "Industrial UPS",
    description:
    "An Industrial UPS protects critical equipment from power cuts, surges, sags, and harmonics. Unlike home UPS units, industrial variants use online double-conversion — power always flows through the battery circuit, giving zero switchover delay during a blackout. Built for harsh environments: wide temperature tolerance, high IP protection, and extended battery autonomy for long outages.",
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
