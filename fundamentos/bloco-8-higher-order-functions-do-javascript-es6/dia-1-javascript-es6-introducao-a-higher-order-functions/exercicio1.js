const geradorEmail = (parametro) => {
    let palavras = parametro.toLowerCase().split(' ');
    let email = palavras[0]
    for (let index = 1; index < palavras.length; index += 1){
        email = `${email}_${palavras[index]}`
    }
    email = `${email}@trybe.com`
    return email;
}

const novo = (nome) => {
    const matriz = {
        nomeCompleto: nome,
        email: geradorEmail(nome),
    }
    return matriz;
}

const newEmployees = () => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// exercicio 2 

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sorteio = () => {
    let result = getRandomIntInclusive(1, 5);
    return result;
}

const conferir = (aposta, funcao) => {
    let valorSorteado = funcao();
    if (aposta === valorSorteado){
        return 'Parabéns você ganhou'
    } else {
        return 'Tente novamente'
    }
}

// exercicio 3

const avaliar = (gabarito,resposta) => {
    let counter = 0;
    for (let index = 0; index < gabarito.length; index += 1) {
        if(gabarito[index] === resposta[index]){
            counter += 1
        }
    }
    return counter
}

const checkarGabarito = (gabarito, resposta, funcao) => funcao(gabarito,resposta);