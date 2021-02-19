const toDoList = document.querySelector(".toDos");
const counting = document.querySelector(".counting");
const text = counting.querySelector("span");
let black = document.querySelector(".black");
let options = document.querySelector(".options");

let a = 0;
const BIG = "first";

const TODOS_LS = 'toDos';

let toDos = [];

function show(event) {
    const toDoClick = event.target;
    const Box = toDoClick.parentNode;
    const Options = Box.childNodes;
    if ( a === 0 ) {
        black.classList.remove(HIDDEN_CN);
        Options[1].classList.remove(HIDDEN_OP);
        toDoClick.classList.add(BIG);
        a = 1;
    } else {
        black.classList.add(HIDDEN_CN);
        Options[1].classList.add(HIDDEN_OP);
        toDoClick.classList.remove(BIG);
        a = 0;
    }
}

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

function deleteToDo(event) {
    const btn = event.target;
    const div = btn.parentNode;
    toDoList.removeChild(div);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(div.id);
    });
    toDos = cleanToDos;
    saveToDos();

    console.log(toDos);
}

function paintToDo(text) {
    const div_box = document.createElement("div");
    const div_option = document.createElement("div");
    const div_toDo = document.createElement("div");
    const divText = document.createElement("div");
    const newId = toDos.length + 1;

    div_option.addEventListener("click", deleteToDo);
    div_option.addEventListener("click", show);
    
    divText.innerText = text;
    div_toDo.appendChild(divText);

    divText.classList.add("text");
    div_toDo.classList.add("toDo");
    div_option.classList.add("options");
    div_option.classList.add(HIDDEN_OP);
    div_box.classList.add("box");
    div_box.appendChild(div_toDo);
    div_box.appendChild(div_option);
    toDoList.appendChild(div_box);
    div_box.id = newId;

    div_toDo.addEventListener("click", show);

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