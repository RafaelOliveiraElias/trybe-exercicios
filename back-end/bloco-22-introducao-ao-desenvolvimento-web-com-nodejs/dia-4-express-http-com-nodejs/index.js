const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const fs = require('fs/promises');

function getSimpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
}

function setSimpsons(newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}


app.get('/ping', function (req, res) {
  res.json({
    message: 'pong',
  })
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.post('/hello', function (req, res) {
  const { name } = req.body;

  res.json({ message: `Hello, ${name}`});
});


app.post('/greetings', function (req, res) {
  const { name, age } = req.body;
  age > 17 ? res.status(200).json({ message: `Hello, ${name}`}) : 
  res.status(401).json({ message: "Unauthorized"})
});

app.put('/users/:name/:age', function (req, res) {
  const { name, age } = req.params;

  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`})
});

app.get('/simpsons', async (req, res)  =>  {

  const arr = await getSimpsons();

  res.json(arr)
});


app.get('/simpsons/:id', async (req, res)  =>  {
  const { id } = req.params;
  const arr = await getSimpsons();
  if( arr.some((each)=> each.id === id) ) return res.json(arr.filter((each) => each.id === id));

  return res.status(404).json({ message: "Not Found."})
});

app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;

    const simpsons = await getSimpsons();

    if (simpsons.some((character) => character.id === id)) {
      // não esqueça de adicionar o return para impedir de que seu código continue.
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await setSimpsons(simpsons);

    return res.status(204).end();
  } catch (error) {
    return res.status(500).end();
  }
});

