const rulesBtn = document.querySelector('.rules-btn');
const rulesModal = document.querySelector('.rules-modal');
const iconClose = document.querySelector('.icon-close');
const icons = document.querySelectorAll('.outer-circle');
const gameContainer = document.querySelector('.rock-paper-scissors');
const theHousePick = document.querySelector('.the-house-picked');
const yourPickContainer = document.querySelector('.you-picked-container');
const theHousePickContainer = document.querySelector(
  '.the-house-picked-container'
);
const winOrLoseContainer = document.querySelector('.win-or-lose-container');
const winOrLoseText = document.querySelector('.win-or-lose-text');
const score = document.querySelector('.score');
const playAgainBtn = document.querySelector('.play-again-btn');

rulesBtn.addEventListener('click', () => {
  rulesModal.style.display = 'flex';
  document.body.classList.add('overlay');
});

iconClose.addEventListener('click', () => {
  rulesModal.style.display = 'none';
  document.body.classList.remove('overlay');
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

icons.forEach(i => {
  i.addEventListener('click', e => {
    const random = randomNumber(1, 4);
    i.style.transition = 'transform 1.25s ease';
    i.style.pointerEvents = 'none';
    gameContainer.style.backgroundImage = 'none';
    document.querySelector('.step-2').style.display = 'flex';
    const gameIcons = [...document.querySelectorAll('.outer-circle')];
    const notClickedIcons = gameIcons.filter(icon => icon !== e.currentTarget);
    notClickedIcons.forEach(notClicked => {
      notClicked.style.display = 'none';
    });
    if (e.target.className.includes('paper')) {
      i.classList.add('you-picked-paper');
    } else if (e.target.className.includes('scissor')) {
      i.classList.add('you-picked-scissor');
    } else {
      i.classList.add('you-picked-rock');
    }
    const outerCircle = document.createElement('div');
    outerCircle.style.opacity = '0';
    outerCircle.classList.add('outer-circle');
    outerCircle.style.pointerEvents = 'none';
    const innerCircle = document.createElement('div');
    innerCircle.classList.add('inner-circle');
    switch (random) {
      case 1:
        outerCircle.classList.add('paper');
        innerCircle.classList.add('paper-icon');
        outerCircle.classList.add('the-house-picked-paper');
        break;
      case 2:
        outerCircle.classList.add('scissor');
        innerCircle.classList.add('scissor-icon');
        outerCircle.classList.add('the-house-picked-scissor');
        break;
      case 3:
        outerCircle.classList.add('rock');
        innerCircle.classList.add('rock-icon');
        outerCircle.classList.add('the-house-picked-rock');
        break;
    }
    let winnerFlag;
    if (e.target.className.includes('paper')) {
      if (outerCircle.className.includes('paper')) {
        winOrLoseText.textContent = "IT'S A TIE";
      } else if (outerCircle.className.includes('scissor')) {
        winOrLoseText.textContent = 'YOU LOSE';
        winnerFlag = false;
      } else {
        winOrLoseText.textContent = 'YOU WIN';
        winnerFlag = true;
      }
    } else if (e.target.className.includes('scissor')) {
      if (outerCircle.className.includes('paper')) {
        winOrLoseText.textContent = 'YOU WIN';
        winnerFlag = true;
      } else if (outerCircle.className.includes('scissor')) {
        winOrLoseText.textContent = "IT'S A TIE";
      } else {
        winOrLoseText.textContent = 'YOU LOSE';
        winnerFlag = false;
      }
    } else {
      if (outerCircle.className.includes('paper')) {
        winOrLoseText.textContent = 'YOU LOSE';
        winnerFlag = false;
      } else if (outerCircle.className.includes('scissor')) {
        winOrLoseText.textContent = 'YOU WIN';
        winnerFlag = true;
      } else {
        winOrLoseText.textContent = "IT'S A TIE";
      }
    }
    setTimeout(() => {
      setTimeout(() => {
        outerCircle.classList.add('fade-in');
        outerCircle.style.opacity = '1';
      }, 50);
      outerCircle.appendChild(innerCircle);
      gameContainer.appendChild(outerCircle);
    }, 2000);
    setTimeout(() => {
      setTimeout(() => {
        winOrLoseContainer.classList.add('fade-in');
      }, 50);
      winOrLoseContainer.style.display = 'flex';
      outerCircle.style.transition = 'transform 1.25s ease';
      yourPickContainer.classList.add('negative-translate-x');
      theHousePickContainer.classList.add('positive-translate-x');
      if (winnerFlag) {
        i.classList.add('win-box-shadow');
        score.textContent = parseInt(score.textContent) + 1;
        score.classList.add('increment-score');
      } else {
        outerCircle.classList.add('win-box-shadow');
        if (
          parseInt(score.textContent) > 0 &&
          winOrLoseText.textContent !== "IT'S A TIE"
        ) {
          score.textContent = parseInt(score.textContent) - 1;
          score.classList.add('increment-score');
        }
      }
      if (winOrLoseText.textContent === "IT'S A TIE") {
        i.classList.remove('win-box-shadow');
        outerCircle.classList.remove('win-box-shadow');
      }
      if (e.target.className.includes('paper')) {
        i.classList.add('step-4-you-picked-paper');
      } else if (e.target.className.includes('scissor')) {
        i.classList.add('step-4-you-picked-scissor');
      } else {
        i.classList.add('step-4-you-picked-rock');
      }
      if (outerCircle.className.includes('paper')) {
        outerCircle.classList.add('step-4-the-house-picked-paper');
      } else if (outerCircle.className.includes('scissor')) {
        outerCircle.classList.add('step-4-the-house-picked-scissor');
      } else {
        outerCircle.classList.add('step-4-the-house-picked-rock');
      }
    }, 3500);
    playAgainBtn.addEventListener('click', () => {
      i.style.transition = '';
      i.style.pointerEvents = 'auto';
      gameContainer.style.backgroundImage = 'url(images/bg-triangle.svg)';
      document.querySelector('.step-2').style.display = 'none';
      outerCircle.remove();
      i.classList.remove('you-picked-paper');
      i.classList.remove('you-picked-scissor');
      i.classList.remove('you-picked-rock');
      i.classList.remove('step-4-you-picked-paper');
      i.classList.remove('step-4-you-picked-scissor');
      i.classList.remove('step-4-you-picked-rock');
      i.classList.remove('win-box-shadow');
      winOrLoseContainer.classList.remove('fade-in');
      score.classList.remove('increment-score');
      notClickedIcons.forEach(icon => {
        icon.style.display = 'block';
      });
      yourPickContainer.classList.remove('negative-translate-x');
      theHousePickContainer.classList.remove('positive-translate-x');
      winOrLoseContainer.style.display = 'none';
    });
  });
});
