//exercicios 1 ao 5, objetos

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log("Bem vinda, " + info.personagem);

info['recorrente'] = 'Sim'

console.log(info.recorrente)

console.table(info)

for (let key in info){
    console.log(key)
};


for (let key in info){
    console.log(info[key])
}


let novo = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};


for (let key in info){
    console.log(info[key] + " e " + novo[key])
}

