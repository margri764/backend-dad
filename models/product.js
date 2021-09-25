
const {Schema, model} = require ('mongoose');

const ProductsSchema = Schema({
    
    name :{
        type: String,
        required: true,
        // unique: true
    },

    
    // usuario: {
    //     type: Schema.Types.ObjectId,
    //     ref:'User',
    //     required: true
    // },

    price: {
        type: Number,
        default: 0,
        required: true,
    },

    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
        // required: [true, 'el nombre de la categoria es obligatorio'],
    },

    description :{ 
        type: String
    },
    state: {
        type: Boolean,
        default: true
    },
    img: { 
        type: String,
        required: true
    }

});

// ProductsSchema.methods.toJSON = function(){
//     const {__v, state, ...data} = this.toObject();
    
//     return data; 
// }

module.exports= model ('Product', ProductsSchema);