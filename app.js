const express = require ('express');
const app = express();
const port = 3030;
const path = require ('path');

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'));
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'));
});

app.get('/producto', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/productDetail.html'));
});

app.listen(port, () => 
    console.log('Servidor online en el puerto '+port));
