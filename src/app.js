const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');

const port = 3030;



// middleware
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// template negine
app.set("view engine", "ejs");
app.set("views", __dirname+"/views");



// routers
const indexRouter = require('./routes/index.routes');

app.use('/', indexRouter);



app.listen(port, () => 
    console.log('Servidor online en el puerto '+port));
