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
    closeCousinModal();
  }
});

const cousinCards = document.querySelectorAll(".cousin-card");
const cousinModal = document.querySelector("#cousin-modal");
const modalCard = cousinModal.querySelector(".modal-card");
const modalImage = document.querySelector("#modal-image");
const modalLocation = document.querySelector("#modal-location");
const modalName = document.querySelector("#modal-name");
const modalRole = document.querySelector("#modal-role");
const modalDescription = document.querySelector("#modal-description");
const modalCloseButtons = document.querySelectorAll("[data-close-modal]");
let lastFocusedCousin = null;

const cousinDetails = {
  jace: {
    name: "Jace",
    location: "The Memory Guide",
    role: "The Memory Guide",
    description: "Jace helps young explorers discover the world of Mnemply. He introduces Memory Spots, the cousins, and the adventures that bring multiplication facts to life.",
    image: "assets/00_Jace.png",
    color: "#e94f35",
    tint: "#fcedea",
  },
  olive: {
    name: "Olive",
    location: "Discovery Grove",
    role: "The First Adventure",
    description: "Olive lives in Discovery Grove, where children begin building their first Memory Pathways. It's the starting point of the Mnemply journey.",
    image: "assets/01_Olive.png",
    color: "#fbba00",
    tint: "#fef8e5",
  },
  braxton: {
    name: "Braxton",
    location: "National Park",
    role: "The Explorer",
    description: "Braxton's National Park is filled with discoveries and connections. Here, children learn how one memory leads naturally to the next.",
    image: "assets/02_Braxton.png",
    color: "#ffee00",
    tint: "#fffde5",
  },
  lily: {
    name: "Lily",
    location: "Museum",
    role: "The Story Keeper",
    description: "Lily's Museum is home to memorable exhibits and surprising stories. Every stop helps children strengthen their memory skills.",
    image: "assets/03_Lily.png",
    color: "#65b33a",
    tint: "#eff7eb",
  },
  laiken: {
    name: "Laiken",
    location: "Rainforest",
    role: "The Problem Solver",
    description: "Deep in the Rainforest, Laiken helps children navigate challenges and uncover hidden connections between memories.",
    image: "assets/04_Laiken.png",
    color: "#00aae5",
    tint: "#e5f6fc",
  },
  alice: {
    name: "Alice",
    location: "Luna Park",
    role: "The Confidence Builder",
    description: "Alice's Luna Park is full of excitement, laughter, and memorable moments that help children grow their confidence.",
    image: "assets/05_Alice.png",
    color: "#3b4395",
    tint: "#ebecf4",
  },
  joshua: {
    name: "Joshua",
    location: "Jungle",
    role: "The Memory Master",
    description: "Joshua's Jungle represents how far children can travel on their memory journey. It is a place of mastery, adventure, and achievement.",
    image: "assets/06_Joshua.png",
    color: "#6c4796",
    tint: "#f0ecf4",
  },
};

function openCousinModal(cousinKey) {
  const cousin = cousinDetails[cousinKey];

  if (!cousin) {
    return;
  }

  modalCard.style.setProperty("--modal-color", cousin.color);
  modalCard.style.setProperty("--modal-tint", cousin.tint);
  modalImage.src = cousin.image;
  modalImage.alt = cousin.name;
  modalLocation.textContent = cousin.location;
  modalName.textContent = cousin.name;
  modalRole.textContent = cousin.role;
  modalDescription.textContent = cousin.description;
  cousinModal.classList.add("is-open");
  cousinModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  cousinModal.querySelector(".modal-close").focus();
}

function closeCousinModal() {
  if (!cousinModal.classList.contains("is-open")) {
    return;
  }

  cousinModal.classList.remove("is-open");
  cousinModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedCousin) {
    lastFocusedCousin.focus();
  }
}

cousinCards.forEach((card) => {
  card.addEventListener("click", () => {
    lastFocusedCousin = card;
    openCousinModal(card.dataset.cousin);
  });
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeCousinModal);
});
