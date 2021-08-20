const { Router } = require ('express');
const router = Router();

const orderNote = require ( '../controllers/orderNote-controllers')


router.post('/', orderNote)


module.exports=router;