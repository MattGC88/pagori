# Footer Fix & Sobre Nosotros Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all placeholder footer links to be real and functional, and create a standalone `sobre-nosotros.html` page.

**Architecture:** Single-page static site (`index.html`) with one CSS file and two JS files. The about page is a separate HTML file that shares the same CSS. Hash routing is handled by a small addition to `app.js` that reads `window.location.hash` on load and activates the matching category tab.

**Tech Stack:** Vanilla HTML, CSS custom properties, vanilla JS (no frameworks, no build step, no test runner — browser verification replaces automated tests).

---

## File Map

| Action | File | What changes |
|---|---|---|
| Modify | `index.html` | Footer — all 3 columns updated |
| Modify | `assets/js/app.js` | Hash routing on DOMContentLoaded |
| Modify | `assets/css/styles.css` | New `.about-*` styles for about page |
| Create | `sobre-nosotros.html` | Standalone about page |

---

## Task 1: Fix Footer — Contacto section

**Files:**
- Modify: `index.html` (footer `footer-col` for Contacto)

- [ ] **Step 1: Replace the Contacto column HTML**

In `index.html`, find the Contacto `footer-col` (currently has `pagrow_ec`, `+593 99 000 0000`, `Ecuador`, `WhatsApp` all with `href="#"`) and replace the entire `<div class="footer-col">` block with:

```html
<div class="footer-col">
    <div class="footer-col-title">Contacto</div>
    <a href="https://www.instagram.com/pagrow_ec/" target="_blank" rel="noopener noreferrer">Instagram @pagrow_ec</a>
    <a href="mailto:Administracion@pagrow.co">Administracion@pagrow.co</a>
    <a href="https://wa.me/593999406826?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20Pagrow." target="_blank" rel="noopener noreferrer">WhatsApp</a>
</div>
```

- [ ] **Step 2: Verify in browser**

Open `index.html` in a browser. Scroll to footer. Confirm:
- "Instagram @pagrow_ec" link opens `instagram.com/pagrow_ec` in a new tab
- Email link opens mail client with `Administracion@pagrow.co`
- WhatsApp link opens `wa.me/593999406826` with the pre-filled message

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "fix: wire real contact links in footer"
```

---

## Task 2: Fix Footer — Empresa section

**Files:**
- Modify: `index.html` (footer `footer-col` for Empresa)

- [ ] **Step 1: Replace the Empresa column HTML**

In `index.html`, find the Empresa `footer-col` (currently has `Sobre Pagrow`, `Investigación`, `Distribuidores`, `Blog`) and replace the entire `<div class="footer-col">` block with:

```html
<div class="footer-col">
    <div class="footer-col-title">Empresa</div>
    <a href="sobre-nosotros.html">Sobre Pagrow</a>
</div>
```

- [ ] **Step 2: Verify in browser**

Open `index.html` in browser. Scroll to footer. Confirm:
- Only "Sobre Pagrow" link appears under Empresa
- Clicking it navigates to `sobre-nosotros.html` (will 404 for now — that's expected)

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "fix: simplify Empresa footer column to Sobre Pagrow only"
```

---

## Task 3: Fix Footer — Productos section

**Files:**
- Modify: `index.html` (footer `footer-col` for Productos)

- [ ] **Step 1: Replace the Productos column HTML**

In `index.html`, find the Productos `footer-col` (currently has `Bioestimulantes`, `Correctores`, `Microorganismos`, `Catálogo PDF`) and replace the entire `<div class="footer-col">` block with:

```html
<div class="footer-col">
    <div class="footer-col-title">Productos</div>
    <a href="index.html#bioestimulantes">Bioestimulantes</a>
    <a href="index.html#suelo">Biología del suelo</a>
    <a href="index.html#correctores">Correctores nutricionales</a>
    <a href="index.html#micro">Microorganismos</a>
</div>
```

- [ ] **Step 2: Verify in browser**

Open `index.html` in browser. Scroll to footer. Confirm all 4 links are visible. Clicking one should navigate to `index.html#bioestimulantes` etc. (hash routing not wired yet — page will just jump to top for now).

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "fix: wire real category links in Productos footer column"
```

---

## Task 4: Add hash routing to app.js

**Files:**
- Modify: `assets/js/app.js`

Hash routing means: when `index.html` loads with a hash like `#bioestimulantes`, JS reads it, activates the matching tab chip, sets `activeCategory`, re-renders the catalog, and scrolls to the catalog section. This is how the footer Productos links work.

- [ ] **Step 1: Add hash routing handler at the bottom of app.js**

Append the following to the very end of `assets/js/app.js`:

```js
// ════════════════════════════════════════════
//  HASH ROUTING
// ════════════════════════════════════════════
(function () {
  const VALID = ["bioestimulantes", "suelo", "correctores", "micro"];
  const hash = window.location.hash.slice(1); // strip leading #
  if (!VALID.includes(hash)) return;

  activeCategory = hash;
  document.querySelectorAll(".tab-chip").forEach((c) => {
    c.classList.toggle("active", c.dataset.cat === hash);
  });
  renderCatalog();
  // Small delay so the page has laid out before scrolling
  setTimeout(() => {
    document.getElementById("catalogBody").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
})();
```

- [ ] **Step 2: Verify in browser**

Navigate directly to `index.html#correctores`. Confirm:
- The catalog renders showing only the "Correctores nutricionales" category
- The "Correctores" tab chip is highlighted as active
- The page scrolls smoothly to the catalog section

Repeat with `index.html#micro`, `index.html#suelo`, `index.html#bioestimulantes`.

Also verify that `index.html` (no hash) still renders all categories as before.

- [ ] **Step 3: Commit**

```bash
git add assets/js/app.js
git commit -m "feat: add hash routing so footer category links filter the catalog"
```

---

## Task 5: Add about-page styles to styles.css

**Files:**
- Modify: `assets/css/styles.css`

These styles are needed before creating `sobre-nosotros.html` so the page looks correct immediately.

- [ ] **Step 1: Append about-page styles at the end of styles.css**

Add the following block to the very end of `assets/css/styles.css`:

```css
/* ══════════════════ ABOUT PAGE ══════════════════ */
.about-section {
    padding: 48px 20px;
    max-width: 720px;
    margin: 0 auto;
}

.about-section-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--sage);
    margin-bottom: 12px;
}

.about-mission-text {
    font-size: 17px;
    line-height: 1.75;
    color: var(--text-mid);
    border-left: 3px solid var(--gold);
    padding-left: 20px;
    margin-top: 0;
}

.about-products-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 8px;
}

@media (max-width: 480px) {
    .about-products-grid {
        grid-template-columns: 1fr;
    }
}

.about-product-card {
    background: var(--white);
    border: 1px solid var(--parchment);
    border-radius: var(--radius-md);
    padding: 20px;
    box-shadow: var(--shadow-sm);
}

.about-product-card-title {
    font-size: 14px;
    font-weight: 700;
    color: var(--forest);
    margin-bottom: 6px;
}

.about-product-card-desc {
    font-size: 13px;
    line-height: 1.6;
    color: var(--text-light);
}

.about-divider {
    border: none;
    border-top: 1px solid var(--parchment);
    margin: 0 20px;
}

.about-cta {
    padding: 48px 20px 64px;
    text-align: center;
}

.about-cta .btn-download {
    display: inline-flex;
    text-decoration: none;
}
```

- [ ] **Step 2: Verify styles loaded**

Open `index.html` in browser (or any page using `styles.css`). Open DevTools → Sources → `styles.css`. Confirm the `.about-section` class appears at the bottom. No visual change to `index.html` expected.

- [ ] **Step 3: Commit**

```bash
git add assets/css/styles.css
git commit -m "feat: add about-page styles to styles.css"
```

---

## Task 6: Create sobre-nosotros.html

**Files:**
- Create: `sobre-nosotros.html`

This page shares `assets/css/styles.css` but does NOT load `data.js` or `app.js` — it is purely static HTML.

- [ ] **Step 1: Create sobre-nosotros.html**

Create `sobre-nosotros.html` at the project root with this content:

```html
<!doctype html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sobre Pagrow – Ciencia Agrícola para tus Cultivos</title>

        <!-- SEO -->
        <meta
            name="description"
            content="En Pagrow trabajamos con un propósito claro: proporcionar soluciones innovadoras y sostenibles que eleven la productividad y calidad de los cultivos de exportación."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pagrow S.A." />

        <!-- Open Graph -->
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sobre Pagrow – Ciencia Agrícola para tus Cultivos" />
        <meta
            property="og:description"
            content="Soluciones innovadoras y sostenibles para la agricultura de exportación en Ecuador."
        />
        <meta property="og:image" content="https://pagrow.es/assets/images/logos-pagrow/png/color/ISOTIPO_BLANCO.png" />
        <meta property="og:url" content="https://pagrow.es/sobre-nosotros.html" />
        <meta property="og:locale" content="es_EC" />

        <!-- Security Headers -->
        <meta
            http-equiv="Content-Security-Policy"
            content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none';"
        />
        <meta http-equiv="X-Content-Type-Options" content="nosniff" />
        <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta http-equiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()" />

        <!-- Canonical -->
        <link rel="canonical" href="https://pagrow.es/sobre-nosotros.html" />

        <!-- Favicon -->
        <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="assets/images/favicon/favicon-32x32.webp" />

        <link rel="stylesheet" href="assets/css/styles.css" />
    </head>
    <body>
        <!-- ════════ HEADER ════════ -->
        <header class="header">
            <a href="index.html" class="logo">
                <img
                    src="assets/images/logos-pagrow/png/blanco-y-negro/HORIZONTAL_CLARO.png"
                    alt="Pagrow"
                    class="logo-img"
                />
            </a>
            <div class="header-actions">
                <a href="index.html" class="icon-btn" title="Volver al catálogo" aria-label="Volver al catálogo de productos" style="display:flex;align-items:center;text-decoration:none;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                </a>
            </div>
        </header>

        <!-- ════════ HERO ════════ -->
        <section class="hero">
            <div class="hero-pattern"></div>
            <div class="hero-content">
                <h1>Sobre <em>Pagrow</em></h1>
                <p>Ciencia agrícola que transforma cultivos</p>
            </div>
        </section>

        <!-- ════════ MISIÓN ════════ -->
        <section class="about-section">
            <div class="about-section-label">Nuestra misión</div>
            <p class="about-mission-text">
                En Pagrow trabajamos con un propósito claro: proporcionar soluciones innovadoras y sostenibles
                que eleven la productividad y calidad de los cultivos de exportación, siempre respetando el
                medio ambiente. Nuestro compromiso es impulsar una agricultura responsable, rentable y alineada
                con el futuro del planeta.
            </p>
        </section>

        <hr class="about-divider" />

        <!-- ════════ LO QUE HACEMOS ════════ -->
        <section class="about-section">
            <div class="about-section-label">Nuestras líneas de producto</div>
            <div class="about-products-grid">
                <div class="about-product-card">
                    <div class="about-product-card-title">Bioestimulantes</div>
                    <div class="about-product-card-desc">
                        Formulaciones para potenciar el desarrollo radicular y las defensas naturales de la planta.
                    </div>
                </div>
                <div class="about-product-card">
                    <div class="about-product-card-title">Biología del suelo</div>
                    <div class="about-product-card-desc">
                        Desbloqueo y establecimiento de microorganismos benéficos para suelos sanos y productivos.
                    </div>
                </div>
                <div class="about-product-card">
                    <div class="about-product-card-title">Correctores nutricionales</div>
                    <div class="about-product-card-desc">
                        Soluciones foliares de alta asimilación para corregir deficiencias y equilibrar la nutrición.
                    </div>
                </div>
                <div class="about-product-card">
                    <div class="about-product-card-title">Microorganismos</div>
                    <div class="about-product-card-desc">
                        Hongos y bacterias benéficas para el control biológico y la salud del cultivo.
                    </div>
                </div>
            </div>
        </section>

        <!-- ════════ CTA ════════ -->
        <section class="about-cta">
            <a href="index.html" class="btn-download">Explorar catálogo →</a>
        </section>

        <!-- ════════ FOOTER ════════ -->
        <footer class="footer">
            <div class="footer-logo">
                <img
                    src="assets/images/logos-pagrow/png/color/ISOTIPO_BLANCO.png"
                    alt="Isotipo Pagrow"
                    class="footer-logo-img"
                />
            </div>
            <div class="footer-tagline">Ciencia agrícola que transforma cultivos</div>
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="footer-col-title">Productos</div>
                    <a href="index.html#bioestimulantes">Bioestimulantes</a>
                    <a href="index.html#suelo">Biología del suelo</a>
                    <a href="index.html#correctores">Correctores nutricionales</a>
                    <a href="index.html#micro">Microorganismos</a>
                </div>
                <div class="footer-col">
                    <div class="footer-col-title">Empresa</div>
                    <a href="sobre-nosotros.html">Sobre Pagrow</a>
                </div>
                <div class="footer-col">
                    <div class="footer-col-title">Contacto</div>
                    <a href="https://www.instagram.com/pagrow_ec/" target="_blank" rel="noopener noreferrer">Instagram @pagrow_ec</a>
                    <a href="mailto:Administracion@pagrow.co">Administracion@pagrow.co</a>
                    <a href="https://wa.me/593999406826?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20Pagrow." target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-copy">© 2026 Pagrow S.A. Todos los derechos reservados.</div>
            </div>
        </footer>
    </body>
</html>
```

- [ ] **Step 2: Verify in browser**

Open `sobre-nosotros.html` directly in browser. Confirm:
- Header shows Pagrow logo + back arrow that returns to `index.html`
- Hero renders with green background and "Sobre Pagrow" heading
- Mission text appears with gold left border
- 4 product cards in a 2×2 grid
- "Explorar catálogo →" button navigates back to `index.html`
- Footer matches the updated footer from Tasks 1–3
- No console errors

- [ ] **Step 3: Commit**

```bash
git add sobre-nosotros.html
git commit -m "feat: add sobre-nosotros.html about page"
```

---

## Self-Review

**Spec coverage check:**
- [x] Footer Productos — 4 real category links → Task 3
- [x] Hash routing on load → Task 4
- [x] Footer Empresa — only "Sobre Pagrow" → Task 2
- [x] Footer Contacto — Instagram, email, WhatsApp → Task 1
- [x] `sobre-nosotros.html` with hero, misión, líneas de producto, CTA → Task 6
- [x] Shared `styles.css`, no `data.js`/`app.js` on about page → Task 6
- [x] Privacy policy skipped (out of scope per spec)
- [x] SEO meta tags on about page → Task 6

**No placeholders detected.**

**Type/name consistency:** `activeCategory`, `renderCatalog()`, `.tab-chip`, `data-cat`, `#catalogBody` — all match existing `app.js` identifiers exactly.
