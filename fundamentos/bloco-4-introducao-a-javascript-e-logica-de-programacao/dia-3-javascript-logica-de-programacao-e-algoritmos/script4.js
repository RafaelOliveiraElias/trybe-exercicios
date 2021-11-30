
let number = 14 ; 

for (let i = 2; i < 99999; i += 1){
    if ((i !== number) && (number % i != 0)){
        console.log("O número " + number + " é primo")
        break;
    } else {
        console.log("O número " + number +  " NÃO é primo")
        break;
    }
}