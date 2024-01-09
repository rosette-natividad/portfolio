/* 4 - Utilize at least 1 of the ".style.property" methods, i.e. 
.style.backgroundColor, .style.fontWeight, etc. */
// Change color of Check Artwork and Check Gallery buttons when mouse hovered
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", (event) => {
    button.style.backgroundColor = "#fcdb48";
    button.style.transform = "scale(1.05)";
  });

  button.addEventListener("mouseleave", (event) => {
    button.style.backgroundColor = "white";
    button.style.transform = "scale(1)";
  });
});
