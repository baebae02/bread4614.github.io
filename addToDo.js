const addBtn = document.querySelector(".addBtn");

const toDolist = document.querySelector(".toDos");

let toDos = [];

function handleSubmit(event) {
    event.preventDefault();
    //const currentValue = toDoInput.value;
    paintToDo(toDos.length+1);
}

function paintToDo(text) {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    span.innerText = text;
    div.appendChild(span);
    div.id = newId;
    div.classList.add("toDo");
    toDolist.appendChild(div);

    const toDoObj = {
        text: text,
        id: newId
    }

    toDos.push(toDoObj);
}

function init() {
    addBtn.addEventListener("click",handleSubmit);
}

init();