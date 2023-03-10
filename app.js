const express = require('express')
const app = express()
const port = 3100

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/welcome', (req, res) => {
    res.send('Bienvenue sur le TP 1 du cours d\'architecture logicielle');
  });
  

app.get('/secret', (req, res) => {
    res.status(401).send('Vous ne possédez pas les droits pour accéder à ma page secrète');
  });
  

app.get('/error', (req, res) => {
    res.status(500).json({ message: 'Une erreur est survenue' });
  });
  

app.get('/img', (req, res) => {
    const path = require('path');
    const imagePath = path.join(__dirname, 'images', 'oiso.jpg');
    res.sendFile(imagePath);
  });
  

app.get('/redirectMe', (req, res) => {
    res.redirect('https://www.iut-littoral.fr/');
  });


app.get('/users/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Bienvenue sur la page de ${name}`);
  });
  

app.get('/somme', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const resultat = a + b;
    res.send(`Le résultat de la somme est : ${resultat}`);
  });

app.use 
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

