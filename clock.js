const clockContainer = document.querySelector(".time"),
  clockTitle = clockContainer.querySelector("h1");

const clockOz = document.querySelector(".oz"),
    clockAMPM = clockOz.querySelector("h3");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  clockAMPM.innerText= `${hours > 11 ? `PM` : 'AM'}`;
}


function init() {
  getTime();
  setInterval(getTime, 1000);
  printOz();
}

init();
