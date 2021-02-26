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
        Options[1].classList.remove(HIDDEN_OP1);
        Options[2].classList.remove(HIDDEN_OP2);
        Options[3].classList.remove(HIDDEN_OP3);
        Options[1].classList.remove(HIDDEN_CN);
        Options[2].classList.remove(HIDDEN_CN);
        Options[3].classList.remove(HIDDEN_CN);
        toDoClick.classList.add(BIG);
        a = 1;
    } else {
        black.classList.add(HIDDEN_CN);
        Options[1].classList.add(HIDDEN_OP1);
        Options[2].classList.add(HIDDEN_OP2);
        Options[3].classList.add(HIDDEN_OP3);
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

    text.innerText = toDos.length;
}

function paintToDo(text) {
    const div_box = document.createElement("div");
    const div_option1 = document.createElement("div");
    const div_option2 = document.createElement("div");
    const div_option3 = document.createElement("div");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    const div_toDo = document.createElement("div");
    const div_text = document.createElement("div");
    const newId = toDos.length + 1;

    img1.setAttribute("src","./img/complete.svg");
    img2.setAttribute("src","./img/edit.svg");
    img3.setAttribute("src","./img/delete.svg");

    div_option1.addEventListener("click", deleteToDo);
    div_option1.addEventListener("click", show);
    div_option2.addEventListener("click", deleteToDo);
    div_option2.addEventListener("click", show);
    div_option3.addEventListener("click", deleteToDo);
    div_option3.addEventListener("click", show);
    
    div_text.innerText = text;
    div_toDo.appendChild(div_text);

    div_text.classList.add("text");
    div_toDo.classList.add("toDo");
    div_option1.classList.add("options1");
    div_option1.classList.add(HIDDEN_CN);
    div_option2.classList.add("options2");
    div_option2.classList.add(HIDDEN_CN);
    div_option3.classList.add("options3");
    div_option3.classList.add(HIDDEN_CN);
    div_box.classList.add("box");
    img1.classList.add("icon");
    img2.classList.add("icon");
    img3.classList.add("icon");
    div_option1.appendChild(img1);
    div_option2.appendChild(img2);
    div_option3.appendChild(img3);
    div_box.appendChild(div_toDo);
    div_box.appendChild(div_option1);
    div_box.appendChild(div_option2);
    div_box.appendChild(div_option3);
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