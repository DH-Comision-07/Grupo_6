const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');
const session = require("express-session");

const port = 3030;

const userLoggedMid = require('./middlewares/userLoggedMid');


// middlewares
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "Proyecto integrador de DH",
    resave: false,
    saveUninitialized: false
}));

app.use(userLoggedMid);


// template negine
app.set("view engine", "ejs");
app.set("views", __dirname+"/views");



// routes
const indexRouter = require('./routes/index.routes');
const productRouter = require('./routes/products.routes');
const userRouter = require('./routes/users.routes');

app.use('/', indexRouter);
app.use('/producto', productRouter);
app.use('/cuenta', userRouter);



app.listen(port, () => 
    console.log('Servidor online en el puerto '+port));
