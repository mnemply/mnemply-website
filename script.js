const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

function setNavOpen(isOpen) {
  navToggle.setAttribute("aria-expanded", String(isOpen));
  siteNav.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setNavOpen(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setNavOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNavOpen(false);
  }
});
