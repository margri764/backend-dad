const { Router } = require ('express');
const { check } = require ('express-validator');
const { getProductSearch } = require('../controllers/product.controllers');
const router = Router();


router.get('/', getProductSearch);



module.exports= router;