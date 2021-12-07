const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre? // classe .tech 

firstLi.className = ['']

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

let todosLi = document.querySelectorAll('li')

for (let i = 0; i< todosLi.length; i += 1){
    todosLi[i].addEventListener("click", recebeClick)
    
    function recebeClick(){
      todosLi[i].classList.add("tech")
      for (let j = 0; j < todosLi.length; j += 1){
      if (j !== i){
        todosLi[j].classList.remove("tech")
    }}
      }
      function texto(){
        document.getElementsByClassName('tech')[0].innerText = input.value
     }
    }
    





// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';


let todosTech = document.querySelectorAll('.tech')

for (let i = 0; i < todosTech.length; i +=1){
function texto(){
    document.getElementsByClassName('todosTech')[0].innerText = input.value
}
}
input.addEventListener("keyup", texto)

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;



function clickDuplo(){
    window.location.href = "http://www.google.com";

}



myWebpage.addEventListener('click', clickDuplo);

// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function mouseOver(event){
    event.target.style.color = 'red';
}
function mouseOut(event) {
    event.target.style.color = "white";
}

myWebpage.addEventListener('mouseover', mouseOver)

myWebpage.addEventListener('mouseout', mouseOut)

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.