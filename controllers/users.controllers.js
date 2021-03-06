const {response} = require ('express');
const bcryptjs = require ('bcryptjs');
const User = require ('../models/user');


const usersGet = async (req,res=response)=>{

    const { limit , from }=req.query;
    const [ total, usuarios] = await Promise.all([
        User.countDocuments( {state:true}),
        User.find( {state:true} )
            .skip( Number (from))
            .limit( Number (limit))
    ])  
   

    res.json({ 
        // total,     
      usuarios

    });
}

const usersPost= async (req, res = response) => {
    
 
    const { name, email, password }= req.body
    console.log(req.body)
    
    const user = new User ({email, password, name});
    
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password,salt);

    await user.save();
    res.json({
        user
    })


}

const usersPut= async (req, res) => {
    
    const { id } = req.params;
    const { _id, password,google, ...rest } = req.body;
    
    if( password ){
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync(password,salt);
    }

    const usuario = await Usuario.findByIdAndUpdate( id,rest );

    res.json({    
        msg:'put API - controller',
        usuario, 
        id
    });
}

const usersDelete= async (req, res) => {

    const { id } = req.params;

    const usuario = await Usuario.findByIdAndUpdate(id,{state:false})
    const usuarioAuth = req.usuarioAuth;

    res.json({       
        usuario,
        usuarioAuth
        
    });
}


module.exports={
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}