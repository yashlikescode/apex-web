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
