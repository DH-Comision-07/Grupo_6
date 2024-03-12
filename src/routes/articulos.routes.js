const express = require('express');
const router = express.Router();


router.get('/nuevo', (req, res) => {                      // Ruta para mostrar el formulario de creación de productos
    res.render('./products/productCreate');
});


router.post('/', (req, res) => {                          // Ruta para manejar la creación de productos
    
});


router.get('/:id/editar', (req, res) => {                  // Ruta para mostrar el formulario de edición de un producto específico
// res.render('form_edicion_articilo', { producto: /*datos del articulo*/});
res.render('./products/productEdit');
});


router.put('/:id', (req, res) => {                           // Ruta para manejar la actualización de productos
    
});

module.exports = router;