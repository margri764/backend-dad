const { response } = require('express');
const jwt = require('jsonwebtoken');


const validarJWT = ( req, res = response, next ) => {

    const token = req.header('x-token');
    // console.log(req.header('x-token'));

    if( !token  ) {
        return res.status(401).json({
            ok: false,
            msg: 'error en el token'
        });
    }

    try {

        const { uid, name } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        req.uid  = uid;
        req.name = name;

        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }



    // TODO OK!
    next();
}


module.exports = {
    validarJWT
}

