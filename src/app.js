const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');
const session = require("express-session");
const userLogged = require('./middlewares/userLogged');
require('dotenv').config();



// **PUERTO**
const port = 3030;



// **MIDDLEWARES**
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "Proyecto integrador de DH",
    resave: false,
    saveUninitialized: false
}));

app.use(userLogged);



// **TEMPLATE ENGINE**
app.set("view engine", "ejs");
app.set("views", __dirname+"/views");



// **ROUTERS**
const indexRouter = require('./routes/index.routes');
const productRouter = require('./routes/products.routes');
const userRouter = require('./routes/users.routes');
const APIRouter = require('./routes/api.routes');

app.use('/', indexRouter);
app.use('/producto', productRouter);
app.use('/cuenta', userRouter);
app.use('/api', APIRouter);



app.listen(port, () => 
    console.log('Servidor online en el puerto '+port));
