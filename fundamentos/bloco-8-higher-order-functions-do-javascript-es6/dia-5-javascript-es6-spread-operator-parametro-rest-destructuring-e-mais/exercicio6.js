const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

function toObject([car, type, year]) {
    return {
        car,
        type,
        year,
    }    
}

console.log(toObject(palio))