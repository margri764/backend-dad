
const {Schema,model} = require ('mongoose');

const Img64Schema = Schema({
    
    img : {
        type: String,
        required: true,
     },


});

// CategorySchema.methods.toJSON = function(){
//     const {__v, state, ...data} = this.toObject();
    
//     return data; 
// }

module.exports= model ('ImgFormat', Img64Schema);