const banner = document.getElementById("themes");
const theme = document.getElementsByClassName("theme");

document
  .getElementById("paintbrush-button")
  .addEventListener("click", function () {
    banner.classList.toggle("themes-display");
    theme.classList.toggle("themes-display");
  });
