const diceIcon = document.querySelector(".dice");
const quoteTitle = document.querySelector(".quote-container div:nth-child(1)");
const quoteContent = document.querySelector(
  ".quote-container div:nth-child(2)"
);

diceIcon.addEventListener("click", function () {
  quoteTitle.classList.add("hide");
  quoteContent.classList.add("hide");
  getAdvice();
  setTimeout(function () {
    quoteTitle.classList.remove("hide");
    quoteContent.classList.remove("hide");
  }, 500);
});

window.onload = function () {
  quoteTitle.classList.add("hide");
  quoteContent.classList.add("hide");
  getAdvice();
  setTimeout(function () {
    quoteTitle.classList.remove("hide");
    quoteContent.classList.remove("hide");
  }, 500);
};

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then(response => {
      return response.json();
    })
    .then(adviceInfo => {
      const adviceObj = adviceInfo.slip;
      adviceQuote = adviceObj.advice;
      adviceId = adviceObj.id;
      document.querySelector(".advice-id").textContent = adviceId;
      document.querySelector(".advice-quote").textContent = adviceQuote;
    })
    .catch(err => {
      console.log(err);
    });
}
