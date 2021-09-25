const {Schema, model} = require ('mongoose');

const UserSchema = Schema({
    
    name:  {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        },
        
    password: {
        type: String,
        required: true,
    },
  
});

UserSchema.methods.toJSON = function(){
    const {__v,password,...usuario} = this.toObject();
    // const {__v,password,_id,...usuario} = this.toObject();
    // usuario.uid= _id;
    return usuario; 
}


module.exports= model('User', UserSchema);