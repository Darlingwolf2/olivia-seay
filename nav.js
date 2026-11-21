const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("is-open", !open);
});

// "About" is a menu, not a link: click toggles it (touch screens); hover/keyboard focus open it via CSS.
document.querySelectorAll(".nav-item").forEach(item => {
  const button = item.querySelector(".nav-parent");
  const setOpen = open => { item.classList.toggle("is-open", open); button.setAttribute("aria-expanded", String(open)); };
  button.addEventListener("click", () => setOpen(!item.classList.contains("is-open")));
  item.addEventListener("keydown", event => { if (event.key === "Escape") { setOpen(false); button.focus(); } });
  document.addEventListener("click", event => { if (!item.contains(event.target)) setOpen(false); });
});
