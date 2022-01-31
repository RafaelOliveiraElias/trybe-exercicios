// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
const piadaHTML = document.getElementById('jokeContainer');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      const piada = data.joke;
      document.getElementById('jokeContainer').innerText = piada;
    });
};

window.onload = () => fetchJoke();