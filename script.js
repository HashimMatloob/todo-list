let input = document.querySelector(".input");
let task= document.querySelectorAll(".task");
let add= document.querySelector(".add");
let currentTaskIndex=0;
let inputVal=input.value;
add.addEventListener("click",()=>{
    let inputVal=input.value;
const currentTask=task[currentTaskIndex];
currentTask.innerText=inputVal;
currentTask.classList.remove("hide");
input.value="";
currentTaskIndex++;
})