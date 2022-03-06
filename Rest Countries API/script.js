//Filter by region
const dropdown = document.querySelector("#region-select");
const searchBar = document.querySelector(".country-search-bar");
const homePage = document.querySelector(".home-page");
const countryDetailsSection = document.querySelector(".country-in-detail");
const backBtn = document.querySelector(".back-btn");
const darkModeBtn = document.querySelector(".mode-toggler");
dropdown.addEventListener("change", function () {
  searchBar.value = "";
  const countries = document.querySelectorAll(".country-container");
  const selectedOption = dropdown.options[dropdown.selectedIndex].text;
  if (selectedOption === "Africa") {
    for (let i = 0; i < countries.length; i++) {
      const isVisible =
        countries[i].childNodes[1].childNodes[2].childNodes[1].textContent ===
        "Africa";
      countries[i].classList.toggle("hide", !isVisible);
    }
  } else if (selectedOption === "Americas") {
    for (let i = 0; i < countries.length; i++) {
      const isVisible =
        countries[i].childNodes[1].childNodes[2].childNodes[1].textContent ===
        "Americas";
      countries[i].classList.toggle("hide", !isVisible);
    }
  } else if (selectedOption === "Asia") {
    for (let i = 0; i < countries.length; i++) {
      const isVisible =
        countries[i].childNodes[1].childNodes[2].childNodes[1].textContent ===
        "Asia";
      countries[i].classList.toggle("hide", !isVisible);
    }
  } else if (selectedOption === "Europe") {
    for (let i = 0; i < countries.length; i++) {
      const isVisible =
        countries[i].childNodes[1].childNodes[2].childNodes[1].textContent ===
        "Europe";
      countries[i].classList.toggle("hide", !isVisible);
    }
  } else if (selectedOption === "Oceania") {
    for (let i = 0; i < countries.length; i++) {
      const isVisible =
        countries[i].childNodes[1].childNodes[2].childNodes[1].textContent ===
        "Oceania";
      countries[i].classList.toggle("hide", !isVisible);
    }
  }
});

//Search bar functionality
searchBar.addEventListener("input", function (e) {
  dropdown.selectedIndex = 0;
  const countries = document.querySelectorAll(".country-container");
  const searchValue = e.target.value.toLowerCase();
  for (let i = 0; i < countries.length; i++) {
    const isVisible = countries[i].childNodes[1].childNodes[0].textContent
      .toLowerCase()
      .includes(searchValue);
    countries[i].classList.toggle("hide", !isVisible);
  }
});

fetch("https://restcountries.com/v3.1/all")
  .then(response => {
    return response.json();
  })
  .then(country => {
    const countriesList = document.querySelector(".countries-list");
    for (let i = 0; i < country.length; i++) {
      const flag = country[i].flags.png;
      const name = country[i].name.common;
      const population = country[i].population;
      const region = country[i].region;
      const capital = country[i].capital;
      const subRegion = country[i].subregion;
      const nativeName = country[i].name.nativeName;
      const topLevelDomain = country[i].tld;
      const currencies = country[i].currencies;
      const languages = country[i].languages;
      const borderCountries = country[i].borders;

      const countryContainer = document.createElement("div");
      countryContainer.classList.add("country-container");
      const countryFlag = document.createElement("div");
      countryFlag.classList.add("flag-container");
      const flagImg = document.createElement("img");
      flagImg.classList.add("flag");
      flagImg.setAttribute("src", `${flag}`);
      flagImg.setAttribute("alt", `Country Flag`);
      countryFlag.appendChild(flagImg);
      const countryDetails = document.createElement("div");
      countryDetails.classList.add("country-details");

      const countryName = document.createElement("div");
      countryName.classList.add("country-name");
      countryName.textContent = name;

      const populationContainer = document.createElement("div");
      populationContainer.classList.add("population-container");
      const headerText1 = document.createElement("span");
      headerText1.classList.add("header-text");
      headerText1.textContent = `Population: `;
      const countryPopulation = document.createElement("span");
      countryPopulation.classList.add("population");
      countryPopulation.textContent = population.toLocaleString();
      populationContainer.appendChild(headerText1);
      populationContainer.appendChild(countryPopulation);

      const regionContainer = document.createElement("div");
      regionContainer.classList.add("region-container");
      const headerText2 = document.createElement("span");
      headerText2.classList.add("header-text");
      headerText2.textContent = `Region: `;
      const countryRegion = document.createElement("span");
      countryRegion.classList.add("region");
      countryRegion.textContent = region;
      regionContainer.appendChild(headerText2);
      regionContainer.appendChild(countryRegion);

      const capitalContainer = document.createElement("div");
      capitalContainer.classList.add("capital-container");
      const headerText3 = document.createElement("span");
      headerText3.classList.add("header-text");
      headerText3.textContent = `Capital: `;
      const countryCapital = document.createElement("span");
      countryCapital.classList.add("capital");
      countryCapital.textContent = capital;
      capitalContainer.appendChild(headerText3);
      capitalContainer.appendChild(countryCapital);

      countryDetails.appendChild(countryName);
      countryDetails.appendChild(populationContainer);
      countryDetails.appendChild(regionContainer);
      countryDetails.appendChild(capitalContainer);

      countryContainer.appendChild(countryFlag);
      countryContainer.appendChild(countryDetails);

      countriesList.appendChild(countryContainer);

      countryContainer.addEventListener("click", function () {
        homePage.style.display = "none";
        countryDetailsSection.style.display = "block";
        const bigFlagImgSrc = countryContainer.childNodes[0].childNodes[0].src;
        const nameOfCountry =
          countryContainer.childNodes[1].childNodes[0].textContent;
        const nativeNameOfCountry = Object.values(nativeName);
        const populationOfCountry =
          countryContainer.childNodes[1].childNodes[1].childNodes[1]
            .textContent;
        const regionOfCountry =
          countryContainer.childNodes[1].childNodes[2].childNodes[1]
            .textContent;
        const subRegionOfCountry = subRegion;
        const capitalOfCountry =
          countryContainer.childNodes[1].childNodes[3].childNodes[1]
            .textContent;
        document.querySelector(".big-flag").setAttribute("src", bigFlagImgSrc);
        document.querySelector(".name-of-country").textContent = nameOfCountry;
        document.querySelector(".native-name").textContent =
          nativeNameOfCountry[0].common;
        document.querySelector(".population-of-country").textContent =
          populationOfCountry;
        document.querySelector(".region-of-country").textContent =
          regionOfCountry;
        document.querySelector(".sub-region").textContent = subRegionOfCountry;
        document.querySelector(".capital-of-country").textContent =
          capitalOfCountry;
        if (topLevelDomain != undefined) {
          document.querySelector(".top-level-domain").textContent =
            topLevelDomain.map(ele => ele).join(", ");
        }

        document.querySelector(".currencies").textContent = Object.values(
          currencies
        )
          .map(element => element.name)
          .join(", ");
        document.querySelector(".languages").textContent = Object.values(
          languages
        )
          .map(element => element)
          .join(", ");

        document.querySelector(".border-countries").innerHTML = "";
        if (borderCountries != undefined) {
          borderCountries.map(ele => {
            fetch(`https://restcountries.com/v3.1/alpha/${ele}`)
              .then(response => {
                return response.json();
              })
              .then(country => {
                const newDiv = document.createElement("div");
                newDiv.textContent = country[0].name.common;
                document.querySelector(".border-countries").appendChild(newDiv);
              });
          });
        }
      });
    }
  })
  .catch(err => {
    console.log(err);
  });

backBtn.addEventListener("click", function () {
  homePage.style.display = "block";
  countryDetailsSection.style.display = "none";
});

darkModeBtn.addEventListener("click", function () {
  if (document.body.getAttribute("data-theme") == "dark-mode") {
    document.body.removeAttribute("data-theme");
    document.querySelector(".mode-text").textContent = "Dark Mode";
    if (document.querySelector(`ion-icon[name="sunny-outline"]`)) {
      document.querySelector(
        `ion-icon[name="sunny-outline"]`
      ).outerHTML = `<ion-icon name="moon-outline"></ion-icon>`;
    }
  } else {
    document.body.setAttribute("data-theme", "dark-mode");
    document.querySelector(".mode-text").textContent = "Light Mode";
    document.querySelector(
      `ion-icon[name="moon-outline"]`
    ).outerHTML = `<ion-icon name="sunny-outline"></ion-icon>`;
  }
});
