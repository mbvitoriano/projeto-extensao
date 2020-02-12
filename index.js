const express = require('express'),
  app = express(),
  mailgun = require("mailgun-js"),
  bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}))

const DOMAIN = "sandbox5a7ce9437dd748c383f7d184c9a274cb.mailgun.org";
const mg = mailgun({apiKey: "3ff3141a88e0bb92173989e6c87626e3-52b6835e-a79e8689", domain: DOMAIN});

app.set('view engine', 'ejs')
app.use(express.static('public')); //Usará a pasta public

app.get('/', function (req, res) {
  // Rota raiz
  res.render('home');
});

app.post('/', function (req, res) { 
  const data = {
    from: req.body.email,
    to: "igortheodoro12@gmail.com",
    subject: req.body.name,
    text: req.body.content
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
  });

  res.redirect('/')
})



app.get('*', function (req, res) {
  //Se não existir a URL pesquisada, redirecione para a rota raiz
  res.redirect('/');
});

app.listen(3000, function () {
  console.log('Running')
})