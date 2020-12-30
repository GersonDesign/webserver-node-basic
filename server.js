const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

hbs.registerPartials(__dirname+'/views/parciales');

app.set('view engine', 'hbs');


app.get('/', function(req, res){
  // let salida = {
  //     nombre: 'Gerson',
  //     url: req.url
  // }
  // res.send(salida);
  res.render('index', {
    nombre: 'Gerson'
  });
})

app.get('/home', function(req, res){
  // let salida = {
  //     nombre: 'Gerson',
  //     url: req.url
  // }
  // res.send(salida);
  res.render('home', {
    nombre: 'Home'
  });
})
app.listen(port, () =>{
  console.log('Esccuchando el server');
})
