const toDoList2 = document.querySelector(".toDos");
const toDo = document.querySelector(".toDo");
const btn = document.querySelector(".addBtn");

const countingAdd = document.querySelector(".counting");
const textAdd = countingAdd.querySelector("span");

let clickBtn = true;

function handleClick(event) {

    if(clickBtn) {
        event.preventDefault();
        printInput();
        clickBtn = false;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const btn = event.target;
    const text = btn.querySelector(".inputToDo");
    toDoList.removeChild(btn);
    clickBtn = true;

    const currentValue = text.value;
    paintToDo(currentValue);
}

function paintToDo(text) {
    const div = document.createElement("div");
    const divText = document.createElement("div");
    const newId = toDos.length + 1;
    
    divText.innerText = text;
    div.appendChild(divText);

    divText.classList.add("text");
    div.classList.add("toDo");
    div.id = newId;
    toDoList.appendChild(div);

    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
    
    textAdd.innerText = toDos.length;
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function printInput() {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const form = document.createElement("form");
    const newId = toDos.length + 1;

    form.addEventListener("submit", handleSubmit);

    input.classList.add("inputToDo");
    form.classList.add("toDo");
    form.id = newId;
    
    form.appendChild(input);
    toDoList2.appendChild(form);   
}

function init() {
    btn.addEventListener("click",handleClick);
}

init();