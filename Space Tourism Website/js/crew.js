const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const crewNavLinkOne = document.querySelector(".crew-nav-link-1");
const crewNavLinkTwo = document.querySelector(".crew-nav-link-2");
const crewNavLinkThree = document.querySelector(".crew-nav-link-3");
const crewNavLinkFour = document.querySelector(".crew-nav-link-4");

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

crewNavLinkOne.addEventListener("click", function () {
  location.href = "./crew-commander.html";
});

crewNavLinkTwo.addEventListener("click", function () {
  location.href = "./crew-specialist.html";
});

crewNavLinkThree.addEventListener("click", function () {
  location.href = "./crew-pilot.html";
});

crewNavLinkFour.addEventListener("click", function () {
  location.href = "./crew-engineer.html";
});
