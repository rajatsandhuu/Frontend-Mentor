const cartButton = document.querySelector(".cart-image");
const cartContainer = document.querySelector(".cart-container");
const prevSymbol = document.querySelector(
  ".product-image-container .previous-symbol"
);
const nextSymbol = document.querySelector(
  ".product-image-container .next-symbol"
);
const lightboxPrevSymbol = document.querySelector(".lightbox .previous-symbol");
const lightboxNextSymbol = document.querySelector(".lightbox .next-symbol");
const productImage = document.getElementById("product-img");
const lightboxProductImage = document.getElementById("lightbox-product-img");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const minusSymbol = document.querySelector(".minus");
const plusSymbol = document.querySelector(".plus");
const quantity = document.querySelector(".quantity");
const addToCartBtn = document.querySelector(".add-to-cart-btn");
const deleteIcon = document.querySelector(".delete-icon");
const thumbnailOne = document.querySelector(".thumbnail-1");
const thumbnailTwo = document.querySelector(".thumbnail-2");
const thumbnailThree = document.querySelector(".thumbnail-3");
const thumbnailFour = document.querySelector(".thumbnail-4");
const lightboxThumbnailOne = document.querySelector(".lightbox-thumbnail-1");
const lightboxThumbnailTwo = document.querySelector(".lightbox-thumbnail-2");
const lightboxThumbnailThree = document.querySelector(".lightbox-thumbnail-3");
const lightboxThumbnailFour = document.querySelector(".lightbox-thumbnail-4");
const closeLightbox = document.querySelector(".close-lightbox");

cartButton.addEventListener("click", function () {
  if (cartContainer.style.display === "none") {
    cartButton.classList.add("cart-active");
    cartContainer.style.display = "block";
  } else {
    cartButton.classList.remove("cart-active");
    cartContainer.style.display = "none";
  }
});

prevSymbol.addEventListener("click", function () {
  if (productImage.getAttribute("src") === "images/image-product-1.jpg") {
    productImage.src = "images/image-product-4.jpg";
  } else if (
    productImage.getAttribute("src") === "images/image-product-2.jpg"
  ) {
    productImage.src = "images/image-product-1.jpg";
  } else if (
    productImage.getAttribute("src") === "images/image-product-3.jpg"
  ) {
    productImage.src = "images/image-product-2.jpg";
  } else if (
    productImage.getAttribute("src") === "images/image-product-4.jpg"
  ) {
    productImage.src = "images/image-product-3.jpg";
  }
});

nextSymbol.addEventListener("click", function () {
  if (productImage.getAttribute("src") === "images/image-product-1.jpg") {
    productImage.src = "images/image-product-2.jpg";
  } else if (
    productImage.getAttribute("src") === "images/image-product-2.jpg"
  ) {
    productImage.src = "images/image-product-3.jpg";
  } else if (
    productImage.getAttribute("src") === "images/image-product-3.jpg"
  ) {
    productImage.src = "images/image-product-4.jpg";
  } else if (
    productImage.getAttribute("src") === "images/image-product-4.jpg"
  ) {
    productImage.src = "images/image-product-1.jpg";
  }
});

hamburgerMenu.addEventListener("click", function () {
  if (navLinks.style.display === "none") {
    navLinks.style.display = "block";
    document.querySelector(".line-1").classList.add("line-1-active");
    document.querySelector(".line-2").classList.add("line-2-active");
    document.querySelector(".line-3").classList.add("line-3-active");
    document.body.style.overflowY = "hidden";
  } else {
    navLinks.style.display = "none";
    document.querySelector(".line-1").classList.remove("line-1-active");
    document.querySelector(".line-2").classList.remove("line-2-active");
    document.querySelector(".line-3").classList.remove("line-3-active");
    document.body.style.overflowY = "visible";
  }
});

minusSymbol.addEventListener("click", function () {
  if (quantity.textContent > 1) {
    quantity.textContent--;
  }
});

plusSymbol.addEventListener("click", function () {
  quantity.textContent++;
});

addToCartBtn.addEventListener("click", function () {
  document.querySelector(".cart-quantity").style.display = "inline-block";
  document.querySelector(".cart-quantity").textContent = quantity.textContent;
  document.querySelector(".cart-is-empty").style.display = "none";
  document.querySelector(".cart-container h4").classList.remove("cart-title");
  document.querySelector(".product-quantity").textContent =
    quantity.textContent;
  document.querySelector(".total-price").textContent = `$${(
    125 * parseFloat(quantity.textContent)
  ).toFixed(2)}`;
  document.querySelector(".cart-with-checkout").style.display = "block";
});

deleteIcon.addEventListener("click", function () {
  document.querySelector(".cart-quantity").style.display = "none";
  document.querySelector(".cart-is-empty").style.display = "block";
  document.querySelector(".cart-container h4").classList.add("cart-title");
  document.querySelector(".cart-with-checkout").style.display = "none";
});

if (window.matchMedia("(min-width: 1440px)").matches) {
  productImage.addEventListener("click", function () {
    document.body.classList.add("overlay");
    document.querySelector(".lightbox").style.display = "block";
    document.querySelector(".lightbox").style.position = "absolute";
  });

  thumbnailOne.addEventListener("click", function () {
    thumbnailOne.classList.add("active");
    thumbnailTwo.classList.remove("active");
    thumbnailThree.classList.remove("active");
    thumbnailFour.classList.remove("active");
    productImage.src = "images/image-product-1.jpg";
  });

  thumbnailTwo.addEventListener("click", function () {
    thumbnailOne.classList.remove("active");
    thumbnailTwo.classList.add("active");
    thumbnailThree.classList.remove("active");
    thumbnailFour.classList.remove("active");
    productImage.src = "images/image-product-2.jpg";
  });

  thumbnailThree.addEventListener("click", function () {
    thumbnailOne.classList.remove("active");
    thumbnailTwo.classList.remove("active");
    thumbnailThree.classList.add("active");
    thumbnailFour.classList.remove("active");
    productImage.src = "images/image-product-3.jpg";
  });

  thumbnailFour.addEventListener("click", function () {
    thumbnailOne.classList.remove("active");
    thumbnailTwo.classList.remove("active");
    thumbnailThree.classList.remove("active");
    thumbnailFour.classList.add("active");
    productImage.src = "images/image-product-4.jpg";
  });

  lightboxThumbnailOne.addEventListener("click", function () {
    lightboxThumbnailOne.classList.add("lightbox-active");
    lightboxThumbnailTwo.classList.remove("lightbox-active");
    lightboxThumbnailThree.classList.remove("lightbox-active");
    lightboxThumbnailFour.classList.remove("lightbox-active");
    lightboxProductImage.src = "images/image-product-1.jpg";
  });

  lightboxThumbnailTwo.addEventListener("click", function () {
    lightboxThumbnailOne.classList.remove("lightbox-active");
    lightboxThumbnailTwo.classList.add("lightbox-active");
    lightboxThumbnailThree.classList.remove("lightbox-active");
    lightboxThumbnailFour.classList.remove("lightbox-active");
    lightboxProductImage.src = "images/image-product-2.jpg";
  });

  lightboxThumbnailThree.addEventListener("click", function () {
    lightboxThumbnailOne.classList.remove("lightbox-active");
    lightboxThumbnailTwo.classList.remove("lightbox-active");
    lightboxThumbnailThree.classList.add("lightbox-active");
    lightboxThumbnailFour.classList.remove("lightbox-active");
    lightboxProductImage.src = "images/image-product-3.jpg";
  });

  lightboxThumbnailFour.addEventListener("click", function () {
    lightboxThumbnailOne.classList.remove("lightbox-active");
    lightboxThumbnailTwo.classList.remove("lightbox-active");
    lightboxThumbnailThree.classList.remove("lightbox-active");
    lightboxThumbnailFour.classList.add("lightbox-active");
    lightboxProductImage.src = "images/image-product-4.jpg";
  });

  lightboxPrevSymbol.addEventListener("click", function () {
    if (
      lightboxProductImage.getAttribute("src") === "images/image-product-1.jpg"
    ) {
      lightboxProductImage.src = "images/image-product-4.jpg";
      lightboxThumbnailOne.classList.remove("lightbox-active");
      lightboxThumbnailFour.classList.add("lightbox-active");
    } else if (
      lightboxProductImage.getAttribute("src") === "images/image-product-2.jpg"
    ) {
      lightboxProductImage.src = "images/image-product-1.jpg";
      lightboxThumbnailTwo.classList.remove("lightbox-active");
      lightboxThumbnailOne.classList.add("lightbox-active");
    } else if (
      lightboxProductImage.getAttribute("src") === "images/image-product-3.jpg"
    ) {
      lightboxProductImage.src = "images/image-product-2.jpg";
      lightboxThumbnailThree.classList.remove("lightbox-active");
      lightboxThumbnailTwo.classList.add("lightbox-active");
    } else if (
      lightboxProductImage.getAttribute("src") === "images/image-product-4.jpg"
    ) {
      lightboxProductImage.src = "images/image-product-3.jpg";
      lightboxThumbnailFour.classList.remove("lightbox-active");
      lightboxThumbnailThree.classList.add("lightbox-active");
    }
  });

  lightboxNextSymbol.addEventListener("click", function () {
    if (
      lightboxProductImage.getAttribute("src") === "images/image-product-1.jpg"
    ) {
      lightboxProductImage.src = "images/image-product-2.jpg";
      lightboxThumbnailOne.classList.remove("lightbox-active");
      lightboxThumbnailTwo.classList.add("lightbox-active");
    } else if (
      lightboxProductImage.getAttribute("src") === "images/image-product-2.jpg"
    ) {
      lightboxProductImage.src = "images/image-product-3.jpg";
      lightboxThumbnailTwo.classList.remove("lightbox-active");
      lightboxThumbnailThree.classList.add("lightbox-active");
    } else if (
      lightboxProductImage.getAttribute("src") === "images/image-product-3.jpg"
    ) {
      lightboxProductImage.src = "images/image-product-4.jpg";
      lightboxThumbnailThree.classList.remove("lightbox-active");
      lightboxThumbnailFour.classList.add("lightbox-active");
    } else if (
      lightboxProductImage.getAttribute("src") === "images/image-product-4.jpg"
    ) {
      lightboxProductImage.src = "images/image-product-1.jpg";
      lightboxThumbnailFour.classList.remove("lightbox-active");
      lightboxThumbnailOne.classList.add("lightbox-active");
    }
  });

  closeLightbox.addEventListener("click", function () {
    document.querySelector(".lightbox").style.display = "none";
    document.body.classList.remove("overlay");
  });
}
