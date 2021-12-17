const billAmount = document.getElementById("bill-amt");
const personAmount = document.getElementById("person-amt");
const customTip = document.getElementById("custom-tip");
const gridItems = document.querySelectorAll(".grid-item");
const personTipAmt = document.querySelector(".person-tip-amt");
const totalTipAmt = document.querySelector(".total-tip-amt");
const resetButton = document.getElementById("reset");

for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("click", function () {
    const activeGridItem = document.querySelector(".grid-item-active");
    if (activeGridItem) {
      activeGridItem.classList.remove("grid-item-active");
    }
    gridItems[i].classList.add("grid-item-active");
    if (
      billAmount &&
      billAmount.value &&
      personAmount &&
      personAmount.value &&
      !isNaN(billAmount.value) &&
      !isNaN(personAmount.value)
    ) {
      if (gridItems[i].classList.contains("grid-item-active")) {
        const tipAmtPerPerson = parseFloat(
          ((gridItems[i].getAttribute("data-value") / 100) * billAmount.value) /
            personAmount.value
        ).toFixed(2);
        personTipAmt.innerText = `$${parseFloat(
          ((gridItems[i].getAttribute("data-value") / 100) * billAmount.value) /
            personAmount.value
        ).toFixed(2)}`;
        totalTipAmt.innerText = `$${parseFloat(
          billAmount.value / personAmount.value + parseFloat(tipAmtPerPerson)
        ).toFixed(2)}`;
      }
    }
  });
}

billAmount.addEventListener("input", function () {
  if (billAmount && billAmount.value) {
    resetButton.style.opacity = 1;
    resetButton.disabled = false;
  } else if (!billAmount.value && !personAmount.value && !customTip.value) {
    resetButton.style.opacity = 0.5;
    resetButton.disabled = true;
  }
  for (let i = 0; i < gridItems.length; i++) {
    if (
      billAmount &&
      billAmount.value &&
      personAmount &&
      personAmount.value &&
      !isNaN(billAmount.value) &&
      !isNaN(personAmount.value)
    ) {
      if (gridItems[i].classList.contains("grid-item-active")) {
        const tipAmtPerPerson = parseFloat(
          ((gridItems[i].getAttribute("data-value") / 100) * billAmount.value) /
            personAmount.value
        ).toFixed(2);
        personTipAmt.innerText = `$${parseFloat(
          ((gridItems[i].getAttribute("data-value") / 100) * billAmount.value) /
            personAmount.value
        ).toFixed(2)}`;
        totalTipAmt.innerText = `$${parseFloat(
          billAmount.value / personAmount.value + parseFloat(tipAmtPerPerson)
        ).toFixed(2)}`;
      } else if (customTip && customTip.value && !isNaN(customTip.value)) {
        const tipAmtPerPerson = parseFloat(
          ((customTip.value / 100) * billAmount.value) / personAmount.value
        ).toFixed(2);
        personTipAmt.innerText = `$${parseFloat(
          ((customTip.value / 100) * billAmount.value) / personAmount.value
        ).toFixed(2)}`;
        totalTipAmt.innerText = `$${parseFloat(
          billAmount.value / personAmount.value + parseFloat(tipAmtPerPerson)
        ).toFixed(2)}`;
      }
    }
  }
});

personAmount.addEventListener("input", function () {
  if (personAmount && personAmount.value) {
    resetButton.style.opacity = 1;
    resetButton.disabled = false;
  } else if (!billAmount.value && !personAmount.value && !customTip.value) {
    resetButton.style.opacity = 0.5;
    resetButton.disabled = true;
  }
  for (let i = 0; i < gridItems.length; i++) {
    if (
      billAmount &&
      billAmount.value &&
      personAmount &&
      personAmount.value &&
      !isNaN(billAmount.value) &&
      !isNaN(personAmount.value)
    ) {
      if (gridItems[i].classList.contains("grid-item-active")) {
        const tipAmtPerPerson = parseFloat(
          ((gridItems[i].getAttribute("data-value") / 100) * billAmount.value) /
            personAmount.value
        ).toFixed(2);
        personTipAmt.innerText = `$${parseFloat(
          ((gridItems[i].getAttribute("data-value") / 100) * billAmount.value) /
            personAmount.value
        ).toFixed(2)}`;
        totalTipAmt.innerText = `$${parseFloat(
          billAmount.value / personAmount.value + parseFloat(tipAmtPerPerson)
        ).toFixed(2)}`;
      } else if (customTip && customTip.value && !isNaN(customTip.value)) {
        const tipAmtPerPerson = parseFloat(
          ((customTip.value / 100) * billAmount.value) / personAmount.value
        ).toFixed(2);
        personTipAmt.innerText = `$${parseFloat(
          ((customTip.value / 100) * billAmount.value) / personAmount.value
        ).toFixed(2)}`;
        totalTipAmt.innerText = `$${parseFloat(
          billAmount.value / personAmount.value + parseFloat(tipAmtPerPerson)
        ).toFixed(2)}`;
      }
    }
  }
});

customTip.addEventListener("input", function () {
  if (customTip && customTip.value) {
    resetButton.style.opacity = 1;
    resetButton.disabled = false;
  } else if (!billAmount.value && !personAmount.value && !customTip.value) {
    resetButton.style.opacity = 0.5;
    resetButton.disabled = true;
  }
  for (let i = 0; i < gridItems.length; i++) {
    if (
      billAmount &&
      billAmount.value &&
      personAmount &&
      personAmount.value &&
      !isNaN(billAmount.value) &&
      !isNaN(personAmount.value)
    ) {
      if (!gridItems[i].classList.contains("grid-item-active")) {
        const tipAmtPerPerson = parseFloat(
          ((customTip.value / 100) * billAmount.value) / personAmount.value
        ).toFixed(2);
        personTipAmt.innerText = `$${parseFloat(
          ((customTip.value / 100) * billAmount.value) / personAmount.value
        ).toFixed(2)}`;
        totalTipAmt.innerText = `$${parseFloat(
          billAmount.value / personAmount.value + parseFloat(tipAmtPerPerson)
        ).toFixed(2)}`;
      }
    }
  }
});

customTip.addEventListener("click", function () {
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].classList.remove("grid-item-active");
  }
});

resetButton.addEventListener("click", function () {
  resetButton.style.opacity = 0.5;
  resetButton.disabled = true;
  billAmount.value = "";
  personAmount.value = "";
  for (let i = 0; i < gridItems.length; i++) {
    if (gridItems[i].classList.contains("grid-item-active")) {
      gridItems[i].classList.remove("grid-item-active");
    }
  }
  customTip.value = "";
  personTipAmt.innerText = "$0.00";
  totalTipAmt.innerText = "$0.00";
});
