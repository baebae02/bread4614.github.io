const clockContainer = document.querySelectorAll(".time"),
  clockTitle1 = clockContainer[0].querySelector("span"),
  clockTitle2 = clockContainer[1].querySelector("span");

const clockOz = document.querySelectorAll(".oz"),
  clockAMPM1 = clockOz[0].querySelector("span"),
  clockAMPM2 = clockOz[1].querySelector("span");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  clockTitle1.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes}`;
  clockTitle2.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes}`;  
    
  clockAMPM1.innerText= `${hours > 11 ? `PM` : 'AM'}`;
  clockAMPM2.innerText= `${hours > 11 ? `PM` : 'AM'}`;
}


function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
