var express = require('express'),
  app = express();

app.set('view engine', 'ejs')
app.use(express.static('public')); //Usará a pasta public

app.get('/', function (req, res) {
  // Rota raiz
  res.render('home');
});

app.get('/jobs', function (req, res) {
  res.render('jobs');
});

app.get('*', function (req, res) {
  //Se não existir a URL pesquisada, redirecione para a rota raiz
  res.redirect('/');
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Running on port 5000')
})