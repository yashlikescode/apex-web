// Product Showcase Functionality
const productData = {
  pcc: {
    title: "Power Control Centre (PCC)",
    description:
      "Our Power Control Centres deliver reliable, efficient power distribution and control across industrial and commercial operations. Built for performance and durability, PCCs are engineered to handle demanding electrical loads while maintaining safety compliance. Experience uninterrupted power management with our precision-engineered solutions designed for maximum efficiency and seamless integration into any infrastructure.",
    images: ["gallery/pcc/1.jpg", "gallery/pcc/2.jpg", "gallery/pcc/3.jpg"],
  },
  mcc: {
    title: "Motor Control Centre (MCC)",
    description:
      "Motor Control Centres provide comprehensive motor management and protection in demanding industrial environments. Our MCC solutions deliver precision control, advanced fault detection, and reliable operation across multi-motor installations. Engineered for safety, efficiency, and seamless integration with modern automation systems.",
    images: ["gallery/pcc/1.jpg", "gallery/pcc/2.jpg", "gallery/pcc/3.jpg"],
  },
  pdb: {
    title: "Power Distribution Board (PDB)",
    description:
      "Power Distribution Boards ensure optimal electrical distribution with superior safety and reliability. Designed for commercial and industrial applications, our PDBs feature advanced protection mechanisms, modular architecture, and intuitive operation. Deliver consistent power to your facility with our expertly engineered distribution solutions.",
    images: ["gallery/pdb/1.jpg", "gallery/pdb/2.jpg", "gallery/pdb/3.jpg"],
  },
  ldb: {
    title: "Load Distribution Board (LDB)",
    description:
      "Load Distribution Boards excel at managing complex electrical networks with precision and safety. Our LDB solutions provide flexible load sharing, fault isolation, and seamless scalability. Built for stability and performance, ensuring your electrical infrastructure operates at peak efficiency.",
    images: ["gallery/pcc/1.jpg", "gallery/pcc/2.jpg", "gallery/pcc/3.jpg"],
  },
  vfd: {
    title: "Variable Frequency Drive (VFD)",
    description:
      "VFD Panels deliver energy-efficient motor control with intelligent frequency modulation. Reduce energy consumption, extend equipment life, and enhance operational flexibility. Our VFD solutions feature advanced power electronics, smooth acceleration control, and comprehensive protection—ideal for industrial automation.",
    images: ["gallery/vfd/1.jpg", "gallery/vfd/2.jpg", "gallery/vfd/3.jpg"],
  },
  sync: {
    title: "Synchronization Panel",
    description:
      "Synchronization Panels enable seamless parallel operation of multiple generators and power sources. Our advanced synchronization solutions ensure voltage and frequency alignment, minimizing stress on equipment and maximizing system reliability. Perfect for backup power and load-sharing applications in critical facilities.",
    images: ["gallery/pcc/1.jpg", "gallery/pcc/2.jpg", "gallery/pcc/3.jpg"],
  },
  apfc: {
    title: "Automatic Power Factor Correction (APFC)",
    description:
      "APFC solutions optimize power factor automatically, reducing reactive power consumption and lowering energy bills. Our intelligent correction systems adapt dynamically to load changes, ensuring maximum efficiency. Enjoy reduced utility charges, enhanced power quality, and extended equipment life.",
    images: ["gallery/pcc/1.jpg", "gallery/pcc/2.jpg", "gallery/pcc/3.jpg"],
  },
  busduct: {
    title: "Busduct Systems",
    description:
      "Busduct systems provide high-capacity power distribution with minimal voltage drop and superior thermal performance. Our modular busduct solutions are designed for flexible routing and efficient installation. Experience reliable, space-saving power distribution for modern industrial and commercial facilities.",
    images: ["gallery/pcc/1.jpg", "gallery/pcc/2.jpg", "gallery/pcc/3.jpg"],
  },
  imcc: {
    title: "Industrial Motor Control Centre (IMCC)",
    description:
      "Industrial Motor Control Centres combine robust engineering with advanced protection for heavy-duty applications. Our IMCC solutions deliver exceptional reliability, precise control, and comprehensive diagnostics. Engineered for harsh industrial environments and demanding 24/7 operations.",
    images: ["gallery/pcc/1.jpg", "gallery/pcc/2.jpg", "gallery/pcc/3.jpg"],
  },
  ups: {
    title: "Industrial UPS Systems",
    description:
      "Industrial UPS systems provide uninterrupted power backup for mission-critical operations. With advanced battery management, automatic switchover, and high efficiency, our UPS solutions protect your equipment from power disruptions. Ensure business continuity with reliable backup power technology.",
    images: ["gallery/pcc/1.jpg", "gallery/pcc/2.jpg", "gallery/pcc/3.jpg"],
  },
};

function initProductShowcase() {
  const buttons = document.querySelectorAll(".product-category-btn");
  const titleEl = document.getElementById("productTitle");
  const descEl = document.getElementById("productDescription");
  const carouselVp = document.getElementById("carouselViewport");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");

  if (!titleEl) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const product = btn.dataset.product;
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const data = productData[product];
      titleEl.textContent = data.title;
      descEl.textContent = data.description;

      carouselVp.innerHTML = data.images
        .map(
          (img, i) => `
        <div class="carousel-item">
          <img src="${img}" alt="${data.title} ${i + 1}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22280%22 height=%22120%22%3E%3Crect fill=%22%23e5e7eb%22 width=%22280%22 height=%22120%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%236b7280%22 font-size=%2214%22%3EImage%3C/text%3E%3C/svg%3E'" />
        </div>
      `,
        )
        .join("");
      carouselVp.scrollLeft = 0;
    });
  });

  prevBtn.addEventListener("click", () => {
    carouselVp.scrollBy({ left: -300, behavior: "smooth" });
  });
  nextBtn.addEventListener("click", () => {
    carouselVp.scrollBy({ left: 300, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", initProductShowcase);

/* ================================================
   PREMIUM SHOWCASE CAROUSEL FUNCTIONALITY
   ================================================ */

document.addEventListener("DOMContentLoaded", function () {
  const carouselPrev = document.querySelector(".carousel-prev");
  const carouselNext = document.querySelector(".carousel-next");
  const carouselTrack = document.querySelector(".carousel-track");

  if (!carouselPrev || !carouselNext || !carouselTrack) return;

  let currentIndex = 0;
  const thumbnails = document.querySelectorAll(".thumbnail");
  const thumbnailWidth = 140 + 16; // width + gap

  carouselPrev.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  carouselNext.addEventListener("click", () => {
    if (currentIndex < thumbnails.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  function updateCarousel() {
    const offset = -currentIndex * thumbnailWidth;
    carouselTrack.style.transform = "translateX(" + offset + "px)";
  }

  // Enable keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    } else if (e.key === "ArrowRight" && currentIndex < thumbnails.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  carouselTrack.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    false,
  );

  carouselTrack.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    false,
  );

  function handleSwipe() {
    if (touchStartX - touchEndX > 50 && currentIndex < thumbnails.length - 1) {
      currentIndex++;
      updateCarousel();
    }
    if (touchEndX - touchStartX > 50 && currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  // Add smooth transitions
  carouselTrack.style.transition = "transform 0.4s ease";
});

/* ================================================
   PREMIUM SHOWCASE TAB FUNCTIONALITY
   ================================================ */

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const showcaseTitle = document.querySelector(".showcase-title");
  const showcaseDesc = document.querySelector(".showcase-desc");
  const productList = document.querySelector(".product-list");

  // Product data for each category
  const productCategories = {
    power: {
      title: "Power Distribution & Control",
      description:
        "Our comprehensive power distribution solutions deliver reliable, efficient power management across industrial and commercial operations. Built for performance and durability, our systems are engineered to handle demanding electrical loads while maintaining safety compliance. Experience uninterrupted power management with precision-engineered solutions designed for maximum efficiency and seamless integration.",
      products: [
        "Power Control Centre (PCC)",
        "Motor Control Centre (MCC)",
        "Power Distribution Board (PDB)",
        "Busduct Systems",
        "Industrial UPS",
      ],
    },
    lighting: {
      title: "Lighting Distribution & Control",
      description:
        "Dedicated lighting distribution solutions engineered for superior safety and reliability. Our lighting control systems feature advanced protection mechanisms, modular architecture, and intuitive operation. Ensure consistent, efficient lighting across your entire facility with expertly engineered distribution solutions optimized for performance.",
      products: [
        "Lighting Distribution Board (LDB)",
        "Load Distribution Board (LDB)",
        "APFC for Lighting Circuits",
        "Smart Lighting Relays",
      ],
    },
    automation: {
      title: "Process Automation & Smart Control",
      description:
        "Advanced automation solutions that integrate seamlessly with modern industrial control systems. Our intelligent systems provide real-time monitoring, predictive maintenance alerts, and remote control capabilities. Designed for Industry 4.0 facilities, delivering precise control and comprehensive data logging.",
      products: [
        "Intelligent MCC (IMCC)",
        "Variable Frequency Drive (VFD)",
        "Synchronization Panel",
        "SCADA Integration",
        "PLC-Ready Systems",
      ],
    },
    cameras: {
      title: "Monitoring & Surveillance Systems",
      description:
        "Integrated monitoring solutions for complete facility visibility. Our surveillance and monitoring systems provide real-time data acquisition, fault detection, and system diagnostics. Ensure operational transparency and rapid response to any system anomalies with our comprehensive monitoring suite.",
      products: [
        "CCTV Integration",
        "Temperature Monitoring",
        "Current & Voltage Sensing",
        "Thermal Imaging",
        "Remote Monitoring Systems",
      ],
    },
    about: {
      title: "About Our Products",
      description:
        "Since 1997, we've been delivering world-class electrical solutions to industries worldwide. Our ISO 9001:2015 certified manufacturing ensures every panel meets international standards. As a SIEPAN Elite Partner and CPRI tested facility, we combine innovation with reliability. Our expertise spans from traditional switchgear to smart, connected electrical systems.",
      products: [
        "ISO 9001:2015 Certified",
        "SIEPAN Elite Partner",
        "CPRI Tested & Approved",
        "25+ Years Experience",
        "Global Customer Base",
        "Customized Solutions",
        "24/7 Technical Support",
        "Competitive Pricing",
      ],
    },
    home: {
      title: "Motor Control Center",
      description:
        "A Motor Control Center (MCC) is a specialized electrical panel designed for centralized motor starting, stopping, and protection. Each motor receives its own dedicated drawer containing a contactor, overload relay, and protective fuses. This configuration ensures precise control, easy maintenance, and enhanced safety across all connected motors. Industrial facilities rely on MCCs for managing pumps, fans, compressors, and conveyors with superior reliability and operational efficiency.",
      products: [
        "PCC",
        "MCC",
        "PDB",
        "LDB",
        "VFD",
        "Synchronization Panel",
        "APFC",
        "Busduct",
        "IMCC",
        "Industrial UPS",
      ],
    },
    contact: {
      title: "Get In Touch",
      description:
        "Have questions about our electrical solutions? Our expert team is ready to assist you with product selection, technical specifications, and customized solutions. Contact us for detailed information, quotations, or on-site consultations. We're committed to providing comprehensive support throughout your project.",
      products: [
        "Sales Inquiry",
        "Technical Support",
        "Product Specifications",
        "Custom Solutions",
        "Installation Support",
        "Maintenance & Upgrades",
        "Bulk Orders",
        "Trade Inquiries",
      ],
    },
  };

  // Handle navigation item clicks
  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      const category = this.textContent.trim().toLowerCase();
      const categoryKey =
        category === "process automation"
          ? "automation"
          : category === "industrial ups"
            ? "home"
            : category;

      const data = productCategories[categoryKey];

      if (data) {
        // Remove active state from all items
        navItems.forEach((nav) => nav.classList.remove("active"));

        // Add active state to clicked item
        this.classList.add("active");

        // Update title with fade effect
        showcaseTitle.style.opacity = "0";
        setTimeout(() => {
          showcaseTitle.textContent = data.title;
          showcaseTitle.style.opacity = "1";
        }, 150);

        // Update description with fade effect
        showcaseDesc.style.opacity = "0";
        setTimeout(() => {
          showcaseDesc.textContent = data.description;
          showcaseDesc.style.opacity = "1";
        }, 150);

        // Update product list
        productList.innerHTML = data.products
          .map((product, index) => {
            return `<li><span class="list-number">${index + 1}.</span> ${product}</li>`;
          })
          .join("");
      }
    });
  });

  // Set initial active state for "Home"
  const homeLink = Array.from(navItems).find(
    (item) => item.textContent.trim().toLowerCase() === "home",
  );
  if (homeLink) {
    homeLink.classList.add("active");
  }
});
