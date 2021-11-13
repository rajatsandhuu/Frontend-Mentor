const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const technologyImg = document.querySelector(".technology-image");
if (window.innerWidth < 768) {
  hamburgerMenu.addEventListener("click", function () {
    if (
      hamburgerMenu.getAttribute("src") ===
      "../assets/shared/icon-hamburger.svg"
    ) {
      hamburgerMenu.src = "../assets/shared/icon-close.svg";
      navLinks.style.display = "block";
    } else {
      hamburgerMenu.src = "../assets/shared/icon-hamburger.svg";
      navLinks.style.display = "none";
    }
  });
}
if (window.innerWidth < 1440) {
  if (
    technologyImg.getAttribute("src") ===
    "../assets/technology/image-space-capsule-portrait.jpg"
  ) {
    technologyImg.src =
      "../assets/technology/image-space-capsule-landscape.jpg";
  } else if (
    technologyImg.getAttribute("src") ===
    "../assets/technology/image-spaceport-portrait.jpg"
  ) {
    technologyImg.src = "../assets/technology/image-spaceport-landscape.jpg";
  } else if (
    technologyImg.getAttribute("src") ===
    "../assets/technology/image-launch-vehicle-portrait.jpg"
  ) {
    technologyImg.src =
      "../assets/technology/image-launch-vehicle-landscape.jpg";
  }
}
