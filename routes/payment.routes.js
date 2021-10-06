const { Router } = require ('express');
const router = Router();

const { generatePayment} = require('../controllers/payment.controllers');

router.post( '/', generatePayment );


module.exports= router;