const express = require('express');
const fortunes = require('./data/fortunes');



const app = express();

app.get('/fortunes',(req, res)=>{
  res.json(fortunes)

});

app.get('/fortunes/random',(req, res)=>{
 console.log('requesting random fortune');

 const random_index = Math.floor(Math.random() * fortunes.length);

 const r_fortune = fortunes[random_index];

 res.json(r_fortune);
});
module.exports = app;
