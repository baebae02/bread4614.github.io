const toDo = document.querySelector(".toDo");
const black = document.querySelector(".black");
let a = 0;

const BIG = "first";


function show(event) {
    if ( a === 0 ) {
        black.classList.remove(HIDDEN_CN);
        toDo.classList.add(BIG);
        a = 1;
    } else {
        black.classList.add(HIDDEN_CN);
        toDo.classList.remove(BIG);
        a = 0;
    }
}

function init() {
    toDo.addEventListener("click", show);
}

init();