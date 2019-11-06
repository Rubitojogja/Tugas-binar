//select
let textTitle = document.querySelector('h2');
let button = document.querySelector('button');

//event
    button.addEventListener('click',updateFontSize);
    textTitle.addEventListener('click', updateColor);

//function event
function updateColor(){
    textTitle.style.color='red';
}
function updateFontSize(){
    textTitle.style.fontSize='40px';
}
