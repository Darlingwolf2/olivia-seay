const gallery = document.querySelector("#gallery");
const dialog = document.querySelector("#lightbox");
const visual = document.querySelector("#lightbox-visual");
const title = document.querySelector("#lightbox-title");
const meta = document.querySelector("#lightbox-meta");
let currentIndex = 0;
// Homepage (data-featured) shows only works with a "home" number, in that order; Work page shows all.
const pool = gallery.dataset.featured
  ? window.ARTWORKS.filter(work => work.home).sort((a, b) => a.home - b.home)
  : window.ARTWORKS;
const visibleArtworks = pool;
function visualMarkup(work, large = false) {
  if (work.image) return `<img src="${work.image}" alt="${work.alt || work.title}">`;
  return `<div class="placeholder placeholder--${work.tone}" role="img" aria-label="Artwork image placeholder"><span>${large ? "Artwork image" : "Image placeholder"}</span></div>`;
}
function renderGallery() {
  const workIndex = gallery.closest(".work-gallery-page");
  gallery.replaceChildren(...visibleArtworks.map((work, index) => {
    const button = document.createElement("button");
    button.className = "artwork";
    button.type = "button";
    button.setAttribute("aria-label", `Open ${work.title}`);
    if (gallery.dataset.featured && work.w) { button.style.setProperty("--w", work.w); button.style.setProperty("--f", work.f || 1.09); button.style.setProperty("--s", work.s || 1); button.style.setProperty("--b", work.image ? (1 - 1 / (work.f || 1.09)) / 2 : 0); }
    button.innerHTML = workIndex
      ? `<span class="artwork-title">${work.title}</span><span class="artwork-summary">${work.medium}<br>${work.dimensions}<br>${work.date}</span><span class="artwork-visual" style="--w:${work.w || 30};--f:${work.f || 1.09}">${visualMarkup(work)}</span>`
      : `${visualMarkup(work)}<span class="artwork-title">${work.title}</span>`;
    button.addEventListener("click", () => openArtwork(index));
    return button;
  }));
}
function openArtwork(index) {
  currentIndex = (index + visibleArtworks.length) % visibleArtworks.length;
  const work = visibleArtworks[currentIndex];
  visual.innerHTML = visualMarkup(work, true);
  title.textContent = work.title;
  meta.innerHTML = `${work.medium}<br>${work.dimensions}<br>${work.date}`;
  if (!dialog.open) dialog.showModal();
}
document.querySelector(".lightbox-close").addEventListener("click", () => dialog.close());
document.querySelector(".previous").addEventListener("click", () => openArtwork(currentIndex - 1));
document.querySelector(".next").addEventListener("click", () => openArtwork(currentIndex + 1));
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener("keydown", event => { if (event.key === "ArrowLeft") openArtwork(currentIndex - 1); if (event.key === "ArrowRight") openArtwork(currentIndex + 1); });
renderGallery();
