//4 funções
function maiorNome(array){
    let m = array[0]
        for(let n = 1; n < array.length; n += 1){
        if (array[n].length > m.length){
            m = array[n];
}
}
return m
}
let test = [ 'José', 'Lucas',  'Nádia', 'Cairo', 'Joana', 'Fernanda'];

console.log(maiorNome(test))

//5 https://www.w3resource.com/javascript-exercises/javascript-array-exercise-8.php

function repeteMais(matriz){
    var mf = 1;
    var m = 0;
    var item;
    for(let index = 0; index < matriz.length; index += 1){ 
        
        for (let i = 0; i < matriz.length; i += 1 ){
            if ( matriz[i] ===  matriz[index]) {
                m +=  1 ;      
            }
            if (mf < m){
                mf = m;
                item = matriz[index];
            }
        }
        m=0;
    }
  


return item ;
}

let ma =  [8, 3, 1, 5, 3, 2, 8]

console.table(repeteMais(ma));

//6 

function somaN (number){
    let soma = 0; 
        for (let i = 0; i <= number; i++){
            soma += i;
        } 
    return soma;
}
let k = 4;
console.log("a soma é de " + k + " é " + somaN(k))

//7

function verifica(word, ending){
    var viraA='';
    var viraB='';
    var li =ending.length -1;
    for(let i = 0; i < ending.length; i += 1){
         viraA = viraA + ending[li -i];
        }
    var dif = word.length - ending.length

    for(let j = word.length - 1; j >= dif; j -= 1){
        viraB= viraB + word[j] 
    }
    if (viraA == viraB){
        return true
    } else {
        return false
    }

    
}
var teste = 'Natanael'
var t= 'ael'
console.log(verifica(teste, t))