const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

const workTime = document.querySelector(".work .time");
const workPreviousTime = document.querySelector(".work .previous-time");
const playTime = document.querySelector(".play .time");
const playPreviousTime = document.querySelector(".play .previous-time");
const studyTime = document.querySelector(".study .time");
const studyPreviousTime = document.querySelector(".study .previous-time");
const exerciseTime = document.querySelector(".exercise .time");
const exercisePreviousTime = document.querySelector(".exercise .previous-time");
const socialTime = document.querySelector(".social .time");
const socialPreviousTime = document.querySelector(".social .previous-time");
const selfCareTime = document.querySelector(".self-care .time");
const selfCarePreviousTime = document.querySelector(
  ".self-care .previous-time"
);

function hideTimes() {
  workTime.classList.add("hide");
  workPreviousTime.classList.add("hide");
  playTime.classList.add("hide");
  playPreviousTime.classList.add("hide");
  studyTime.classList.add("hide");
  studyPreviousTime.classList.add("hide");
  exerciseTime.classList.add("hide");
  exercisePreviousTime.classList.add("hide");
  socialTime.classList.add("hide");
  socialPreviousTime.classList.add("hide");
  selfCareTime.classList.add("hide");
  selfCarePreviousTime.classList.add("hide");
}

function showTimes() {
  workTime.classList.remove("hide");
  workPreviousTime.classList.remove("hide");
  playTime.classList.remove("hide");
  playPreviousTime.classList.remove("hide");
  studyTime.classList.remove("hide");
  studyPreviousTime.classList.remove("hide");
  exerciseTime.classList.remove("hide");
  exercisePreviousTime.classList.remove("hide");
  socialTime.classList.remove("hide");
  socialPreviousTime.classList.remove("hide");
  selfCareTime.classList.remove("hide");
  selfCarePreviousTime.classList.remove("hide");
}

daily.addEventListener("click", function () {
  if (!daily.classList.contains("active")) {
    daily.classList.add("active");
    weekly.classList.remove("active");
    monthly.classList.remove("active");
    hideTimes();
    setTimeout(function () {
      workTime.textContent = "5hrs";
      workPreviousTime.textContent = "Yesterday - 7hrs";
      playTime.textContent = "1hr";
      playPreviousTime.textContent = "Yesterday - 2hrs";
      studyTime.textContent = "0hrs";
      studyPreviousTime.textContent = "Yesterday - 1hr";
      exerciseTime.textContent = "1hr";
      exercisePreviousTime.textContent = "Yesterday - 1hr";
      socialTime.textContent = "1hr";
      socialPreviousTime.textContent = "Yesterday - 3hrs";
      selfCareTime.textContent = "0hrs";
      selfCarePreviousTime.textContent = "Yesterday - 1hr";
    }, 500);
    setTimeout(showTimes, 500);
  }
});

weekly.addEventListener("click", function () {
  if (!weekly.classList.contains("active")) {
    daily.classList.remove("active");
    weekly.classList.add("active");
    monthly.classList.remove("active");
    hideTimes();
    setTimeout(function () {
      workTime.textContent = "32hrs";
      workPreviousTime.textContent = "Last Week - 36hrs";
      playTime.textContent = "10hrs";
      playPreviousTime.textContent = "Last Week - 8hrs";
      studyTime.textContent = "4hrs";
      studyPreviousTime.textContent = "Last Week - 7hrs";
      exerciseTime.textContent = "4hrs";
      exercisePreviousTime.textContent = "Last Week - 5hrs";
      socialTime.textContent = "5hrs";
      socialPreviousTime.textContent = "Last Week - 10hrs";
      selfCareTime.textContent = "2hrs";
      selfCarePreviousTime.textContent = "Last Week - 2hrs";
    }, 500);
    setTimeout(showTimes, 500);
  }
});

monthly.addEventListener("click", function () {
  if (!monthly.classList.contains("active")) {
    daily.classList.remove("active");
    weekly.classList.remove("active");
    monthly.classList.add("active");
    hideTimes();
    setTimeout(function () {
      workTime.textContent = "103hrs";
      workPreviousTime.textContent = "Last Month - 128hrs";
      playTime.textContent = "23hrs";
      playPreviousTime.textContent = "Last Month - 29hrs";
      studyTime.textContent = "13hrs";
      studyPreviousTime.textContent = "Last Month - 19hrs";
      exerciseTime.textContent = "11hrs";
      exercisePreviousTime.textContent = "Last Month - 18hrs";
      socialTime.textContent = "21hrs";
      socialPreviousTime.textContent = "Last Month - 23hrs";
      selfCareTime.textContent = "7hrs";
      selfCarePreviousTime.textContent = "Last Month - 11hrs";
    }, 500);
    setTimeout(showTimes, 500);
  }
});
