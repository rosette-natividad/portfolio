/* Hamburger Menu */
const nav = document.querySelector("nav");
const hamburgerIcon = document.querySelector("ul.hamburger-icon");

hamburgerIcon.addEventListener("click", function (event) {
  nav.classList.toggle("show-mobile");
});

window.addEventListener("resize", function (event) {
  if (event.target.innerWidth >= 550 && nav.classList.contains("show-mobile")) {
    nav.classList.remove("show-mobile");
  }
});

/* Shuffle Gallery */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const gallery = document.querySelector(".gallery");
const galleryItems = Array.from(gallery.children);
shuffleArray(galleryItems);

galleryItems.forEach((item) => gallery.appendChild(item));
