// ════════════════════════════════════════════
//  STATE
// ════════════════════════════════════════════
let activeCategory = "all";
let searchQuery = "";
let openProduct = null;

// ════════════════════════════════════════════
//  RENDER
// ════════════════════════════════════════════
function getAllProducts() {
  return categories.flatMap((c) =>
    c.products.map((p) => ({
      ...p,
      catId: c.id,
      catName: c.name,
      cssClass: c.cssClass,
    })),
  );
}

function filterProducts() {
  let all = getAllProducts();
  if (activeCategory !== "all") {
    all = all.filter((p) => p.catId === activeCategory);
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    all = all.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q),
    );
  }
  return all;
}

function renderCatalog() {
  const container = document.getElementById("categorySections");
  const emptyState = document.getElementById("emptyState");
  const resultsNum = document.getElementById("resultsNum");
  const filtered = filterProducts();
  resultsNum.textContent = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = "";
    emptyState.classList.add("visible");
    return;
  }
  emptyState.classList.remove("visible");

  // Eyebrow labels per category id
  const eyebrows = {
    bioestimulantes: "Bioestimulantes",
    suelo: "Biología del suelo",
    correctores: "Nutrición foliar",
    micro: "Microorganismos",
  };

  function buildBanner(id, title, description) {
    const eyebrow = eyebrows[id] || "";
    const descBlock = description
      ? `<div class="cat-desc-wrap"><p class="cat-desc">${description}</p></div>`
      : "";
    return `
      <div class="cat-banner banner-${id}">
        <div class="cat-banner-inner">
          ${eyebrow ? `<div class="cat-eyebrow">${eyebrow}</div>` : ""}
          <div class="cat-title">${title}</div>
          ${descBlock}
        </div>
      </div>`;
  }

  if (activeCategory !== "all" || searchQuery) {
    const cat = categories.find((c) => c.id === activeCategory) || {
      id: "raices",
      name: "Resultados",
      description: "",
    };
    const displayName = searchQuery ? `Búsqueda: "${searchQuery}"` : cat.name;
    const desc = searchQuery ? "" : cat.description || "";
    container.innerHTML =
      buildBanner(cat.id || "raices", displayName, desc) +
      `<div class="product-grid">${filtered.map((p) => renderCard(p)).join("")}</div>`;
  } else {
    container.innerHTML = categories
      .map(
        (cat) =>
          buildBanner(cat.id, cat.name, cat.description) +
          `<div class="product-grid">${cat.products
            .map((p) =>
              renderCard({
                ...p,
                catId: cat.id,
                catName: cat.name,
                cssClass: cat.cssClass,
              }),
            )
            .join("")}</div>`,
      )
      .join("");
  }

  document.querySelectorAll(".product-card").forEach((el, idx) => {
    el.style.animationDelay = `${(idx % 8) * 40}ms`;
    el.addEventListener("click", () => openModal(el.dataset.id));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(el.dataset.id);
      }
    });
  });
}

function renderCard(p) {
  return `
    <div class="product-card ${p.cssClass}${p.badge ? " has-badge" : ""}" data-id="${p.id}" role="button" tabindex="0">
      ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ""}
      <div class="card-image">
        <img src="${p.image || "assets/images/placeholder.webp"}" alt="${p.name}" width="400" height="300" loading="lazy">
      </div>
      <div class="card-top">
        <span class="cat-tag">${p.tag}</span>
      </div>
      <div class="card-body">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.shortDesc}</div>
      </div>
      <div class="card-footer">
        <button class="btn-ficha" onclick="event.stopPropagation(); openModal('${p.id}')">
          Ver ficha técnica <span class="arrow">→</span>
        </button>
      </div>
    </div>`;
}

// ════════════════════════════════════════════
//  MODAL
// ════════════════════════════════════════════
window.openModal = function (id) {
  const p = getAllProducts().find((x) => x.id === id);
  if (!p) return;
  openProduct = p;

  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalCatLabel").textContent = p.catName;

  const iconEl = document.getElementById("modalIcon");
  iconEl.src = p.image || "assets/images/placeholder.webp";
  iconEl.alt = p.name;

  const benefitsHTML = p.benefits
    .map(
      (b) => `
    <li class="benefit-item">
      <span class="benefit-dot">✓</span>
      <span>${b}</span>
    </li>`,
    )
    .join("");

  document.getElementById("modalBody").innerHTML = `
    <p class="modal-desc">${p.fullDesc}</p>
    <div class="info-grid">
      <div class="info-card">
        <div class="info-card-label">Aplicación</div>
        <div class="info-card-value">${p.application.split(".")[0]}</div>
      </div>
      <div class="info-card">
        <div class="info-card-label">Tipo</div>
        <div class="info-card-value">${p.tag}</div>
      </div>
    </div>
    <div class="benefits-title">Beneficios principales</div>
    <ul class="benefits-list">${benefitsHTML}</ul>
    <div class="composition-box">
      <div class="composition-title">Composición</div>
      <div class="composition-text">${p.composition}</div>
    </div>

    <div class="modal-actions">
      ${
        p.pdf
          ? `<a href="${p.pdf}" class="btn-download" target="_blank" rel="noopener">
        Ver ficha técnica (PDF)
      </a>`
          : ""
      }
      <a href="#" class="btn-contact" onclick="return false;">
        Consultar con un agrónomo
      </a>
    </div>
  `;

  const overlay = document.getElementById("modalOverlay");
  overlay.classList.add("open");
  overlay.removeAttribute("aria-hidden");
  document.getElementById("modalSheet").scrollTop = 0;
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
};

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  openProduct = null;
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ════════════════════════════════════════════
//  TABS
// ════════════════════════════════════════════
document.querySelectorAll(".tab-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-chip")
      .forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    activeCategory = chip.dataset.cat;
    renderCatalog();
    document
      .getElementById("catalogBody")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ════════════════════════════════════════════
//  SEARCH
// ════════════════════════════════════════════
document.getElementById("searchToggle").addEventListener("click", () => {
  const wrap = document.getElementById("searchWrap");
  wrap.classList.toggle("open");
  if (wrap.classList.contains("open")) {
    setTimeout(() => document.getElementById("searchInput").focus(), 100);
  }
});

document.getElementById("searchInput").addEventListener("input", function () {
  searchQuery = this.value.trim();
  if (searchQuery) {
    activeCategory = "all";
    document.querySelectorAll(".tab-chip").forEach((c) => {
      c.classList.toggle("active", c.dataset.cat === "all");
    });
  }
  renderCatalog();
});

// ════════════════════════════════════════════
//  UPDATE TAB COUNTS
// ════════════════════════════════════════════
function updateCounts() {
  const el = document.getElementById("resultsNum");
  if (el) el.textContent = getAllProducts().length;
}

// ════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════
updateCounts();
renderCatalog();
