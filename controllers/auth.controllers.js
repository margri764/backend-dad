const {response} = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const { generarJWT, googleVerify } = require('../helpers');





const login = async (req, res=response)=>{

    const {email, password} = req.body;
    console.log("login:", req.body)

   try {
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({
                msg: 'Usuario no existe'
            });
        }

   
        const checkPassword = bcryptjs.compareSync(password, user.password)
        if(!checkPassword) {
            return res.status(400).json({
                msg: 'Password incorrecto'
            })
        }
        const token = await generarJWT(user.id);

        res.json({
                // ok: true,
                uid: user.id, 
                name: user.name,
                email: user.email,
                // token

        })
   } catch (error) {
        res.status(500).json({
            msg: 'hable con el administrador'
        })       
    }
}

const revalidarToken = async(req, res = response ) => {

    const { uid, name } = req;

    // Generar el JWT
    const token = await generarJWT( uid, name );

    return res.json({
        ok: true,
        uid, 
        name,
        token
    });

}

// const googleSignIn = async ( req, res) => {

//     const { idToken } = req.body;       
    
//     try {
        
//         const { name, img, email } = await googleVerify(idToken); 
   
      
//         let usuario = await Usuario.findOne( {email} );
//         let resToFront= "exitsUserInDB";

//         if(!usuario){
//             const data={
//                 name,
//                 email,
//                 img,
//                 password:'sin password - usuario de google',
//                 google: true
//         };
//             usuario = new Usuario (data)
//             await usuario.save()
//         }
      


//         if(!usuario.state){
//             return res.status(401).json({
//                 msg: 'hable con el administrador, usuario bloqueado'
//             });
//         }
//         const token = await generarJWT(usuario.id);

//         res.json({
//             // usuario,
//             // token   
//             // email
//             resToFront
                 
           
//         });
        
//     } catch (error) {

//         res.status(400).json({
//             msg: 'Token de Google no es válido'
//         })
//     }
// }


module.exports={
    login,
    // googleSignIn
    revalidarToken
}
