const displayLast = document.getElementById("last");
const displayActually = document.getElementById("actually");
const bottomClear= document.getElementById("clear");
const bottomClean= document.getElementById("clean");
const bottomNumber = document.querySelectorAll(".number");
const bottomOperator = document.querySelectorAll('.operator');

const display = new Display(displayLast,displayActually);

bottomNumber.forEach(bottom1 =>{
    bottom1.addEventListener('click', ()=>{
        display.addNumber(bottom1.innerHTML);

    });
});

bottomClear.addEventListener('click',()=>{
    display.clear();
});

bottomClean.addEventListener("click", ()=>{
    display.clean();
})

bottomOperator.forEach(bottom =>{
    bottom.addEventListener('click', ()=> display.compute(bottom.value));//computar(bottom.value));
})