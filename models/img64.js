
const {Schema,model} = require ('mongoose');

const Img64Schema = Schema({
    
     voucher: [{
        type: Object,
        required: true,
     }],

  
});


module.exports= model ('ImgFormat', Img64Schema);