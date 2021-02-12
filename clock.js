const clockContainer = document.querySelector(".time"),
  clockTitle = clockContainer.querySelector("span");

const clockOz = document.querySelector(".oz"),
    clockAMPM = clockOz.querySelector("span");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes}`;
  clockAMPM.innerText= `${hours > 11 ? `PM` : 'AM'}`;
}


function init() {
  getTime();
  setInterval(getTime, 1000);
  printOz();
}

init();
