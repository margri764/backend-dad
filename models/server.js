const express = require('express');
const cors = require ('cors');
const path = require ('path');
const { dbConnection } = require('../db/config.db');
const fileUpload = require('express-fileupload');

class Server{

        constructor(){
            this.app = express();
            this.port = process.env.PORT;
            this.conectarDB();
            this.middlewares();
            this.routes();
            
        }

    async conectarDB() {
         await dbConnection();
    }
    
    middlewares(){
        this.app.use(cors());
        this.app.use (express.json());
        this.app.use(express.static('public'));
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        })); 

    }    

    routes(){
        this.app.use('/api/send-mail',  require('../routes/email.routes'));
        this.app.use('/api/order-note', require('../routes/orderNote.routes'));
        this.app.use('/api/categories', require('../routes/category.routes'));   
        this.app.use('/api/products',   require('../routes/product.routes')); 
        this.app.use('/api/products/search',   require('../routes/search.routes'));   

        this.app.use('/api/users',      require('../routes/user.routes'));
        this.app.use('/api/auth',       require('../routes/auth.routes')); 
        this.app.use('/api/payment',    require('../routes/payment.routes')); 


        this.app.get('*', (req, res) => { 
        res.sendFile( path.resolve( __dirname,'../public/index.html') )
        });

        //prueba
        // this.app.use('/api/thumbnail-upload', require('../routes/prueba.routes'));   

        // this.app.use('/api/search', require('../routes/search.routes'));   
        // this.app.use('/api/uploads', require('../routes/uploads.routes'));              
    }

    listen(){
        this.app.listen(this.port)
        console.log('servidor corriendo en puerto', this.port)
    }
}

module.exports = Server;
