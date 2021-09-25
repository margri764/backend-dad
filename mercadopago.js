
// SDK de Mercado Pago
const mercadopago = require('mercadopago');

//middleware
// app.use(express.json);
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());


// Agrega credenciales
mercadopago.configure({
    access_token: 'TEST-6623451607855904-111502-83c610c2165674e9bba665cfb4aa6b0c-672708410'
});

  
class MercadopagoController {

    mercadopago({request}){
      let preference = {
          items: [
            {
              title:req.body.title,
              unit_price: parseInt(req.body.price),
              quantity: 1,
            }
          ]
        };
        
 
        
        // mercadopago.preferences.create(preference)
        // .then(function(response){
    
      
        
        //   res.redirect(response.body.init_point);
         
        // }).catch(function(error){
        //   console.log(error);
        // });
    }
}

      


module.exports= MercadopagoController;




