// ============================================================
// RASHKA BARRE VIDEO STORE — MAIN SCRIPT
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const products = window.PRODUCTS || [];
  const videoGrid = document.getElementById("videoGrid");
  const emptyState = document.getElementById("emptyState");

  // ----------------------------------------------------------
  // Render video cards
  // ----------------------------------------------------------

  if (!videoGrid) return;

  if (products.length === 0) {
    if (emptyState) emptyState.hidden = false;
    return;
  }

  videoGrid.innerHTML = products.map((product) => {
    const previewButton = product.preview
      ? `
        <button class="btn btn-outline btn-sm preview-btn"
                data-preview="${escapeHtml(product.preview)}"
                data-title="${escapeHtml(product.title)}"
                data-desc="${escapeHtml(product.description)}">
          Preview
        </button>
      `
      : "";

    return `
      <article class="video-card">
        <div class="card-thumb">
          <img
            src="${escapeHtml(product.thumbnail)}"
            alt="${escapeHtml(product.title)}"
            loading="lazy"
            onerror="this.style.display='none';"
          >

          <div class="card-price">
            ${escapeHtml(product.price)}
          </div>

          ${
            product.preview
              ? `
                <div class="card-play">
                  <button class="card-play-btn preview-btn"
                          data-preview="${escapeHtml(product.preview)}"
                          data-title="${escapeHtml(product.title)}"
                          data-desc="${escapeHtml(product.description)}"
                          aria-label="Preview ${escapeHtml(product.title)}">
                    <svg width="22" height="22" viewBox="0 0 24 24"
                         fill="white" stroke="white" stroke-width="2"
                         stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="8 5 19 12 8 19 8 5"></polygon>
                    </svg>
                  </button>
                </div>
              `
              : ""
          }
        </div>

        <div class="card-body">
          <h3 class="card-title">${escapeHtml(product.title)}</h3>

          <p class="card-desc">
            ${escapeHtml(product.description)}
          </p>

          <div class="card-actions">
            ${previewButton}

            <a
              class="btn btn-primary btn-sm buy-btn"
              href="${escapeHtml(product.paymentUrl || "#")}"
              data-product="${escapeHtml(product.title)}">
              Buy for ${escapeHtml(product.price)}
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // ----------------------------------------------------------
  // Preview modal
  // ----------------------------------------------------------

  const modal = document.getElementById("previewModal");
  const previewVideo = document.getElementById("previewVideo");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");

  document.querySelectorAll(".preview-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (!modal || !previewVideo) return;

      const preview = button.dataset.preview;
      const title = button.dataset.title || "Preview";
      const desc = button.dataset.desc || "";

      previewVideo.src = preview;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;

      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");

      previewVideo.play().catch(() => {});
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  function closeModal() {
    if (!modal || !previewVideo) return;

    previewVideo.pause();
    previewVideo.removeAttribute("src");
    previewVideo.load();

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  // ----------------------------------------------------------
  // Buy buttons
  // ----------------------------------------------------------

  document.querySelectorAll(".buy-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const href = button.getAttribute("href");

      if (!href || href === "#") {
        event.preventDefault();
        alert(
          "Payment is not connected yet. The purchase system will be added soon."
        );
      }
    });
  });

  // ----------------------------------------------------------
  // Mobile navigation
  // ----------------------------------------------------------

  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ----------------------------------------------------------
  // Current year
  // ----------------------------------------------------------

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});

// ------------------------------------------------------------
// Small HTML escaping helper
// ------------------------------------------------------------

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
