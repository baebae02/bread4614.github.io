//Todolist greeting.js
const form = document.querySelector(".idForm"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".IDGreeting");

  //id생성자 불러와서 input에 저장함, IDGreeting은 h4태그인데 걔를 불러와서 greeting에 저장함.

const USER_LS = "currentUser",
    SHOWING_CN = "showing",
    HIDDEN_CN = "hidden",
    HIDDEN_OP1 = "hiddenOP1",
    HIDDEN_OP2 = "hiddenOP2"
    HIDDEN_OP3 = "hiddenOP3";

const container = document.querySelector(".container");
 

 
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  form.classList.add(HIDDEN_CN);
  container.classList.remove(HIDDEN_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();