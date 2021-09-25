const { Router } = require ('express');
const { onFileupload } = require('../controllers/product.controllers');
const router = Router();

router.post('/', onFileupload);


module.exports= router;