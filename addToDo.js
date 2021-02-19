const toDoList2 = document.querySelector(".toDos");
const toDo = document.querySelector(".toDo");
const btn = document.querySelector(".addBtn");

const countingAdd = document.querySelector(".counting");
const textAdd = countingAdd.querySelector("span");

let clickBtn = true;

function show(event) {
    const toDoClick = event.target;
    const Box = toDoClick.parentNode;
    const Options = Box.childNodes;
    console.log(Options[1]);
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