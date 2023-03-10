const express = require('express')
const app = express()
const port = 3000



const metrics = {
    requestsCount: {},
    startTime: Date.now()
  };
  
 
app.use((req, res, next) => {
    const path = req.path;
    metrics.requestsCount[path] = (metrics.requestsCount[path] || 0) + 1;
    next();
  });
  
  
app.get('/metrics', (req, res) => {
    const uptime = Math.floor((Date.now() - metrics.startTime) / 1000);
    const response = {
      status: 'healthy',
      requestsCount: metrics.requestsCount,
      uptime: uptime
    };
    res.json(response);
  });


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((req, res, next) => {
    const now = new Date();
    console.log(`[${now.toLocaleString()}] ${req.method} ${req.url}`);
    next();
  });

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

app.use((req, res) => {
    res.status(404).send("Cette page n'existe pas !");
  });

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

