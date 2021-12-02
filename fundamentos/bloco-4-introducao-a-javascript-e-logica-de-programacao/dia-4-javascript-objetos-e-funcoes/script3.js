//funçoes

//1 até o 3

function palindromo(palavra){
    let nova = ''
    for (let index = 0; index < palavra.length ; index += 1){
        nova = palavra[index] + nova
    }
    if (nova === palavra){
        console.log(palavra + " é um palidromo")
    } else {
        console.log(palavra + " não é um palidromo")
    }
}
palindromo('teste')
palindromo('arara')


function maiorIndice(matriz){
    let maior = 0;
    let valorMaior= 0;
    for(let index = 0; index < matriz.length ; index += 1){ 
         if (matriz[index] > valorMaior){
                valorMaior = matriz[index] 
            } 
        }
        for(let index = 0; index < matriz.length ; index += 1){ 
         if(valorMaior === matriz[index]){
             maior = index
         }
        }
    
    return maior ;
}


function menorIndice(matriz){
    let maior = matriz[0];
    let valorMenor= matriz[0];
    for(let index = 0; index < matriz.length ; index += 1){ 
         if (matriz[index] < valorMenor){
            valorMenor = matriz[index] 
            } 
        }
        for(let index = 0; index < matriz.length ; index += 1){ 
         if(valorMenor === matriz[index]){
             maior = index
         }
        }
    
    return maior ;
}

teste = [51, 7, 1, -3, 2, -6]

console.log("o maior é " +  maiorIndice(teste))

console.log("o menor é " +  menorIndice(teste))
