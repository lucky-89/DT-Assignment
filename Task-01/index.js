let right = document.querySelector('#right');

let left = document.querySelector('#left');
let two=document.querySelector('#two');
let one = document.querySelector('#one');

right.addEventListener("click",()=>{
    one.classList.add('disabled');
    two.classList.remove('disabled');
});
left.addEventListener("click",()=>{
    two.classList.add('disabled');
    one.classList.remove('disabled');
});