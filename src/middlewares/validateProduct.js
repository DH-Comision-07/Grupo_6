const {check} = require("express-validator");


let validateProduct = [
  check('name')
  .notEmpty()
  .withMessage('El nombre no puede estar vacío')
  .isLength({min:5})
  .withMessage('El nombre debe tener al menos 5 caracteres'),

  check('description')
  .notEmpty()
  .isLength({min:20})
  .withMessage('La descripción debe ser más larga'),
  
  check('image')
  .custom((value, {req}) => {
        if((req.file.mimetype.toLowerCase() === 'image/png') || (req.file.mimetype.toLowerCase() === 'image/jpeg') || (req.file.mimetype.toLowerCase() === 'image/jpg') || (req.file.mimetype.toLowerCase() === 'image/gif')){
            return true; 
        }else{
            return false; 
        }
    })
  .withMessage('La imagen debe ser formato PNG, JPEG, JPG O GIF.'),
]

module.exports = validateProduct;