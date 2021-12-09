let body = document.querySelector('body')


body.addEventListener("onload", voltou())

function voltou(){
body.style.backgroundColor = localStorage.color;
body.style.color = localStorage.textcolor;
body.style.fontSize = localStorage.tamanhoDesejado
body.style.lineHeight = localStorage.espacamentoDesejado;
}




//background
let okCor = document.getElementById('bt_color')
let inputCor = document.getElementById('corDeFundo')

function mudaCor(){
    const corDesejada = inputCor.value;
    body.style.backgroundColor = corDesejada;
    localStorage.setItem('color', corDesejada)
}

okCor.addEventListener('click',mudaCor)

//cor de texto
let okCorT = document.getElementById('bt_colort')
let inputcorDeTexto = document.getElementById('corDeTexto')

function mudaCorTexto(){
    const corTextoDesejada = inputcorDeTexto.value;
    body.style.color = corTextoDesejada;
    localStorage.setItem('textcolor', corTextoDesejada)
}

okCorT.addEventListener('click', mudaCorTexto)

//tamanho da fonte:
let okTamanho = document.getElementById('bt_tamanho')
let tamanhoDaFonte = document.getElementById('tamanhoDaFonte')

function tamanhoDesejado(){
    const tamanhoDesejado = tamanhoDaFonte.value;
    body.style.fontSize = tamanhoDesejado;
    localStorage.setItem('tamanhoDesejado', tamanhoDesejado)
}

okTamanho.addEventListener('click', tamanhoDesejado)



//Espaçamento entre as linhas do texto:
let okEspacamento = document.getElementById('bt_espacamento')
let espacamento = document.getElementById('espacamento')

function espacamentoDesejado(){
    const espacamentoDesejado = espacamento.value;
    body.style.lineHeight = espacamentoDesejado;
    localStorage.setItem('espacamentoDesejado', espacamentoDesejado)
}

okEspacamento.addEventListener('click', espacamentoDesejado)
