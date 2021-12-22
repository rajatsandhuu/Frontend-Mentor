const circle = document.querySelector(".circle");
const themeOne = document.querySelector(".theme-1");
const themeTwo = document.querySelector(".theme-2");
const themeThree = document.querySelector(".theme-3");
const r = document.documentElement.dataset;
const gridButtons = document.querySelectorAll(".keypad-grid button");
const deleteButton = document.querySelector("#delete-btn");
const resetButton = document.querySelector("#reset-btn");
const equalToButton = document.querySelector("#equal-to-btn");
const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");

let firstOperand, secondOperand, finalResult, operator;
let regex = new RegExp(",", "g");

themeOne.addEventListener("click", function () {
  circle.style.transform = "translateX(0px)";
  document.body.removeAttribute("data-theme");
});

themeTwo.addEventListener("click", function () {
  circle.style.transform = "translateX(24px)";
  document.body.setAttribute("data-theme", "theme-two");
});

themeThree.addEventListener("click", function () {
  circle.style.transform = "translateX(48px)";
  document.body.setAttribute("data-theme", "theme-three");
});

for (let i = 0; i < gridButtons.length; i++) {
  gridButtons[i].addEventListener("click", function () {
    if (
      gridButtons[i].textContent !== "DEL" &&
      gridButtons[i].textContent !== "RESET" &&
      gridButtons[i].textContent !== "="
    ) {
      if (currentOperand.textContent.includes(".")) {
        if (gridButtons[i].textContent !== ".") {
          currentOperand.textContent += gridButtons[i].textContent;
          if (
            !currentOperand.textContent.includes(".") &&
            !currentOperand.textContent.includes("+") &&
            !currentOperand.textContent.includes("-") &&
            !currentOperand.textContent.includes("x") &&
            !currentOperand.textContent.includes("/")
          ) {
            currentOperand.textContent = parseFloat(
              currentOperand.textContent.replace(regex, "")
            ).toLocaleString();
          }
        }
      } else {
        currentOperand.textContent += gridButtons[i].textContent;
        if (
          !currentOperand.textContent.includes(".") &&
          !currentOperand.textContent.includes("+") &&
          !currentOperand.textContent.includes("-") &&
          !currentOperand.textContent.includes("x") &&
          !currentOperand.textContent.includes("/")
        ) {
          currentOperand.textContent = parseFloat(
            currentOperand.textContent.replace(regex, "")
          ).toLocaleString();
        }
      }
    }
    if (
      gridButtons[i].textContent === "+" ||
      gridButtons[i].textContent === "-" ||
      gridButtons[i].textContent === "x" ||
      gridButtons[i].textContent === "/"
    ) {
      if (currentOperand.innerHTML.trim().length !== 1) {
        operator = gridButtons[i].textContent;
        firstOperand = parseFloat(
          currentOperand.textContent.replace(regex, "")
        );
        if (previousOperand.textContent !== "") {
          if (previousOperand.textContent.indexOf("+") > -1) {
            previousOperand.textContent = (
              parseFloat(previousOperand.textContent.replace(/[^0-9.-]/g, "")) +
              parseFloat(currentOperand.textContent.replace(regex, ""))
            ).toLocaleString();
            previousOperand.textContent += operator;
          } else if (previousOperand.textContent.indexOf("-") > -1) {
            previousOperand.textContent = (
              parseFloat(previousOperand.textContent.replace(/[^0-9.-]/g, "")) -
              parseFloat(currentOperand.textContent.replace(regex, ""))
            ).toLocaleString();
            previousOperand.textContent += operator;
          } else if (previousOperand.textContent.indexOf("x") > -1) {
            previousOperand.textContent = (
              parseFloat(previousOperand.textContent.replace(/[^0-9.-]/g, "")) *
              parseFloat(currentOperand.textContent.replace(regex, ""))
            ).toLocaleString();
            previousOperand.textContent += operator;
          } else if (previousOperand.textContent.indexOf("/") > -1) {
            previousOperand.textContent = (
              parseFloat(previousOperand.textContent.replace(/[^0-9.-]/g, "")) /
              parseFloat(currentOperand.textContent.replace(regex, ""))
            ).toLocaleString();
            previousOperand.textContent += operator;
          }
        } else {
          previousOperand.textContent = currentOperand.textContent;
        }
        currentOperand.textContent = "";
      } else if (currentOperand.innerHTML.trim().length === 1) {
        if (
          gridButtons[i].textContent === "+" ||
          gridButtons[i].textContent === "x" ||
          gridButtons[i].textContent === "/"
        ) {
          operator = gridButtons[i].textContent;
          firstOperand = parseFloat(
            currentOperand.textContent.replace(regex, "")
          );
          previousOperand.textContent = currentOperand.textContent;
          currentOperand.textContent = "";
        }
      }
    }
  });
}

deleteButton.addEventListener("click", function () {
  currentOperand.textContent = currentOperand.textContent.slice(0, -1);
});

resetButton.addEventListener("click", function () {
  previousOperand.textContent = "";
  currentOperand.textContent = "";
  firstOperand = undefined;
  secondOperand = undefined;
  operator = undefined;
  finalResult = undefined;
});

equalToButton.addEventListener("click", function () {
  const tempFirst = previousOperand.textContent.replace(regex, "");
  firstOperand = parseFloat(tempFirst.slice(0, -1));
  previousOperand.textContent = "";
  secondOperand = parseFloat(currentOperand.textContent.replace(regex, ""));
  switch (operator) {
    case "+":
      finalResult = firstOperand + secondOperand;
      break;
    case "-":
      finalResult = firstOperand - secondOperand;
      break;
    case "x":
      finalResult = firstOperand * secondOperand;
      break;
    case "/":
      finalResult = firstOperand / secondOperand;
      break;
  }
  if (
    typeof firstOperand !== "undefined" &&
    typeof secondOperand !== "undefined"
  ) {
    currentOperand.textContent = finalResult.toLocaleString();
  }
});
