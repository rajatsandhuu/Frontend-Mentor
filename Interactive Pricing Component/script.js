const slider = document.querySelector('.slider');
const min = slider.min;
const max = slider.max;
const value = slider.value;
const bill = document.querySelector('.bill');
const checkbox = document.querySelector('.check-box');
const pageViews = document.querySelector('.page-views');

function updateBill() {
  if (checkbox.checked) {
    document.querySelector('.per-month').textContent = '/ year';
    if (slider.value == '1') {
      bill.textContent = '$72.00';
      pageViews.textContent = '10K';
    } else if (slider.value == '2') {
      bill.textContent = '$108.00';
      pageViews.textContent = '50K';
    } else if (slider.value == '3') {
      bill.textContent = '$144.00';
      pageViews.textContent = '100K';
    } else if (slider.value == '4') {
      bill.textContent = '$216.00';
      pageViews.textContent = '500K';
    } else if (slider.value == '5') {
      bill.textContent = '$324.00';
      pageViews.textContent = '1M';
    }
  } else {
    document.querySelector('.per-month').textContent = '/ month';
    if (slider.value == '1') {
      bill.textContent = '$8.00';
      pageViews.textContent = '10K';
    } else if (slider.value == '2') {
      bill.textContent = '$12.00';
      pageViews.textContent = '50K';
    } else if (slider.value == '3') {
      bill.textContent = '$16.00';
      pageViews.textContent = '100K';
    } else if (slider.value == '4') {
      bill.textContent = '$24.00';
      pageViews.textContent = '500K';
    } else if (slider.value == '5') {
      bill.textContent = '$36.00';
      pageViews.textContent = '1M';
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
