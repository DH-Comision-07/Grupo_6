const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index.routes');


app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", __dirname+"/views");

const port = 3030;

app.use('/', indexRouter);

app.listen(port, () => 
    console.log('Servidor online en el puerto '+port));
