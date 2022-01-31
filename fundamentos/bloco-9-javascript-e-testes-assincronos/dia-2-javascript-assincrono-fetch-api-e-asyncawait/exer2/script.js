const API_URL = 'https://api.coincap.io/v2/assets';
const lista = document.getElementById('list');

const fetchCoins = async () => {
    try {
        const myObject = {
            method: 'GET',
          };        
        const resposta = await fetch(API_URL, myObject);
        const data = await resposta.json();
        const matriz = data.data.filter((each,index) => index < 10);
        matriz.forEach((each) => {
          const values = `${each.name} está com valor de ${each.priceUsd.toFixed(1)}`
          console.log(values)
        }) 
    } catch (error) {
        console.log(error)
    }
}

window.onload = () => fetchCoins();