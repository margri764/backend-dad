const { Router } = require ('express');
const router = Router();
const { check } = require ('express-validator');

const { createCategory } = require('../controllers/category.controllers');
// const { checkCategory} = require ('../helpers/db-validators');


const { checkFields } = require ('../middlewares/check-fields');

// const { checkToken } = require ('../middlewares/check-jwt');
// const { adminRole } = require('../middlewares/check-role');



//craer una categoria - privado cualquier persona con token valido
router.post('/',[ 

    // checkToken,
    check('name','el nombre es obligatorio').not().isEmpty(),
    checkFields  

],createCategory );


// //obtener todas las categorias - publico
// router.get('/', getCategory);

// //obtener una categoria por id - publico
// router.get('/:id',[

//     check('id', 'no es un id de Mongo valido').isMongoId(),
//     check('id').custom( checkCategory),
//     checkFields,
// ],getCategoryById);






// //actualizar una categoria - privado cualquier persona con token valido
// router.put('/:id',[

//     checkToken,
//     check('name','el nombre es obligatorio').not().isEmpty(),
//     check('id').custom( checkCategory),
//     checkFields

// ],updateCategory);

// //Borrar una categoria - privado solos si tiene role "ADMIN"
// router.delete('/:id',[

//     checkToken,
//     adminRole,
//     check('id', 'no es un id de Mongo valido').isMongoId(),
//     check('id').custom( checkCategory),
//     checkFields,
// ],deleteCategory);



module.exports= router;