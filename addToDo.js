const toDo = document.querySelector(".toDo");
const toDoList = document.querySelector(".toDos");
const counting = document.querySelector(".counting");
const text = counting.querySelector("span");

const TODOS_LS = 'toDos';

let toDos = [];

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    } 
    text.innerText = toDos.length;
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
}

function init() {
    loadToDos();
}

init();