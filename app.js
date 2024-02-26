const express = require ('express');
const app = express();
const port = 3030;
const path = require ('path');

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'));
});

app.get('/productCart', (req,res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'));      /*agregar ruta*/
});

app.listen(port, () => 
    console.log('Servidor online en el puerto '+port));