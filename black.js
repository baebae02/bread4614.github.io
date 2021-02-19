const black = document.querySelector(".black"); 
const toDoClick = document.querySelector(".toDo");
let a = 0;

const BIG = "first";


function show(event) {
    if ( a === 0 ) {
        black.classList.remove(HIDDEN_CN);
        toDoClick.classList.add(BIG);
        a = 1;
    } else {
        black.classList.add(HIDDEN_CN);
        toDoClick.classList.remove(BIG);
        a = 0;
    }
}

function init() {
    toDoClick.addEventListener("click", show);
}

init();