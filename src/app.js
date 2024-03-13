const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index.routes');


app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", __dirname+"/views");

const port = 3030;

app.use('/', indexRouter);
<<<<<<< HEAD
app.use('/articulos', articulosRoutes);   
=======

>>>>>>> e8e317429c5ddacb6c22406b5992103552d67f9c


app.listen(port, () => 
    console.log('Servidor online en el puerto '+port));
