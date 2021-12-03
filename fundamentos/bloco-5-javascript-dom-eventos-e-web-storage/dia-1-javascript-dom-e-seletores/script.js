document.querySelector("#header-container").style.backgroundColor = "green"

document.querySelector("Body").style.backgroundColor = "gray"  

document.querySelector("Footer").style.backgroundColor = "Black"    

document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "orange"
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "yellow"

let teste = document.querySelectorAll(".emergency-tasks h3")

for(let i of teste){
    i.style.backgroundColor = "purple"
}

let teste2 = document.querySelectorAll(".no-emergency-tasks h3")

for(let i of teste2){
    i.style.backgroundColor = "black"
}