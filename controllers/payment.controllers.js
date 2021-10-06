const mercadopago = require('mercadopago');

mercadopago.configure({
    access_token: 'TEST-6623451607855904-111502-83c610c2165674e9bba665cfb4aa6b0c-672708410'
});




const generatePayment = async ( req, res ) => {

    const { quantity,unit_price,title}= req.body

    const preference = {
            items: [
            {
                title      : title,
                unit_price : unit_price,
                quantity   : quantity                                    
            }               
                    ]              
        
        };



  mercadopago.preferences.create(preference)
  .then(function(response){

      res.status(200).json(response.body.init_point)

   
  }).catch(function(error){
    console.log(error);
 
});


};


module.exports = { generatePayment };