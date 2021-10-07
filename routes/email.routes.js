const { Router } = require ('express');
const router = Router();

const  email  = require ('../controllers/email.controllers')

router.post('/', email)



module.exports=router;