const slider = document.querySelector('.slider');
const min = slider.min;
const max = slider.max;
const value = slider.value;
const bill = document.querySelector('.bill');
const checkbox = document.querySelector('.check-box');

function updateBill() {
  if (checkbox.checked) {
    if (slider.value == '1') {
      bill.textContent = '$6.00';
    } else if (slider.value == '2') {
      bill.textContent = '$9.00';
    } else if (slider.value == '3') {
      bill.textContent = '$12.00';
    } else if (slider.value == '4') {
      bill.textContent = '$18.00';
    } else if (slider.value == '5') {
      bill.textContent = '$27.00';
    }
  } else {
    if (slider.value == '1') {
      bill.textContent = '$8.00';
    } else if (slider.value == '2') {
      bill.textContent = '$12.00';
    } else if (slider.value == '3') {
      bill.textContent = '$16.00';
    } else if (slider.value == '4') {
      bill.textContent = '$24.00';
    } else if (slider.value == '5') {
      bill.textContent = '$36.00';
    }
  }
}

slider.style.background = `linear-gradient(to right, #a5f3eb 0%, #a5f3eb ${
  ((value - min) / (max - min)) * 100
}%, #eaeefb ${((value - min) / (max - min)) * 100}%, #eaeefb 100%)`;

checkbox.addEventListener('change', updateBill);

slider.oninput = function () {
  this.style.background = `linear-gradient(to right, #a5f3eb 0%, #a5f3eb ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, #eaeefb ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, #eaeefb 100%)`;
  updateBill();
};
