const { Router } = require ('express');
const { check } = require ('express-validator');
const router = Router();

const { createProduct, getProduct }  = require('../controllers/product.controllers');
const { checkFields } = require('../middlewares/check-fields');
const { checkCategory } = require ('../helpers/db-validators')


//obtener todos los productos - publico
router.get('/',getProduct);


// //crear un producto - privado cualquier persona con token valido
router.post('/',[ 

    check('name','el nombre del producto es obligatorio').not().isEmpty(),
    check('price','el precio del producto es obligatorio').not().isEmpty(),
    check('category','Seleccione una categoria o Contactese con el Administrador').isMongoId(),
    check('category').custom( checkCategory ),
    checkFields
], createProduct );


    


module.exports= router;