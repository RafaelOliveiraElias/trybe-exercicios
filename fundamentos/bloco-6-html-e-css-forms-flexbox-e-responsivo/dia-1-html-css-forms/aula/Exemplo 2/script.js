// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function exemplo(event){
    event.preventDefault()
}


function exemplo2(event){
    if(event.key !== 'a'){
        event.preventDefault()
    }
}


HREF_LINK.addEventListener('click', exemplo)
INPUT_CHECKBOX.addEventListener('click', exemplo)
INPUT_TEXT.addEventListener('keypress',exemplo2)