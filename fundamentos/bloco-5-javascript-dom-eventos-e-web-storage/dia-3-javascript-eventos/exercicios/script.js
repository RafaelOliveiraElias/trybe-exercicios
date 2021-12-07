function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
//1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let mes = document.querySelectorAll("ul")[2];

  for (let i = 0; i < dezDaysList.length; i += 1){
      let diasDaSemana = document.createElement('li');
      diasDaSemana.innerText = dezDaysList[i];
      mes.appendChild(diasDaSemana);
      diasDaSemana.className = "day"



      if(dezDaysList[i] === 24 || dezDaysList[i] === 31){
        diasDaSemana.className = "day holiday"
      }
      if(dezDaysList[i] === 4 || dezDaysList[i] === 11 ||  dezDaysList[i] === 18){
        diasDaSemana.className = "day friday"
      }
      if(dezDaysList[i] === 25){
        diasDaSemana.className = "day friday holiday"
      }
  }

//2
  let Feriado = document.createElement('button');
  Feriado.innerText = "Feriados"
  Feriado.id = "btn-holiday"

  let buttons = document.querySelector(".buttons-container");
  buttons.appendChild(Feriado);

 //3

 let diasFeriados = document.getElementsByClassName('holiday'); 
function corDay1() {
    for (let i = 0; i < diasFeriados.length; i += 1){
    diasFeriados[i].style.backgroundColor = 'red';
    }
}

function corDay() {
    if (diasFeriados[0].style.backgroundColor != 'red'){
        for (let i = 0; i < diasFeriados.length; i += 1){
        diasFeriados[i].style.backgroundColor = 'red';
        }
    }else {
        for (let i = 0; i < diasFeriados.length; i += 1){
        diasFeriados[i].style.backgroundColor = 'rgb(238,238,238)'
        }
    }
}

Feriado.addEventListener('click', corDay);

//4

let sexta_feira = document.createElement('button');
sexta_feira.innerText = "Sexta-feira"
sexta_feira.id = "btn-friday"
buttons.appendChild(sexta_feira);

//5 

let sexta =  document.getElementsByClassName('friday')
let a = [];
for(let i = 0; i <sexta.length; i += 1){
    a[i]=sexta[i].innerText
}


function sextou() {
    if (sexta[0].innerText !== 'SEXTOU'){
     for (let i = 0; i < sexta.length; i += 1){
        sexta[i].innerText = 'SEXTOU';
        }
    }else {
        for(let i = 0; i < sexta.length; i += 1){
            sexta[i].innerText = a[i]
    }}
}

sexta_feira.addEventListener('click', sextou)


//6

let cadaDia = document.getElementsByClassName("day")

function zoom(evento){
    evento.target.style.fontSize = "200%"
}

for (let i = 0; i < cadaDia.length; i += 1){
cadaDia[i].addEventListener('mouseover', zoom);
}

function zoomOut(evento){
    evento.target.style.fontSize = "20px"
}

for (let i = 0; i < cadaDia.length; i += 1){
cadaDia[i].addEventListener('mouseout', zoomOut);
}

//7

function agenda() {
    var x = document.getElementById("task-input").value;
    document.getElementById("task-input").innerHTML = x;
  }