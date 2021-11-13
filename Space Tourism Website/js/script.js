const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");
if (window.innerWidth < 768) {
  hamburgerMenu.addEventListener("click", function () {
    if (
      hamburgerMenu.getAttribute("src") === "./assets/shared/icon-hamburger.svg"
    ) {
      hamburgerMenu.src = "./assets/shared/icon-close.svg";
      navLinks.style.display = "block";
    } else {
      hamburgerMenu.src = "./assets/shared/icon-hamburger.svg";
      navLinks.style.display = "none";
    }
  });
}
