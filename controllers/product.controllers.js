
const { upFilesFront } = require('../helpers/upload-files');
const Product = require ('../models/product');
const cloudinary= require ('cloudinary').v2;
cloudinary.config( process.env.CLOUDINARY_URL);


const createProduct =  async (req, res) => { 
 

    try {
        
         if (!req.files || Object.keys(req.files).length === 0) {

        return res.status(400).json({
            ok: false,
            msg: 'No hay ningún archivo'
         });
         }
         
 
        const {name, category, ...body } = req.body;
        const nameImg = req.files.imagen;
        
        
         await upFilesFront( nameImg.name );

        const { tempFilePath } = req.files.imagen;
           

        const productDB = await Product.findOne({name:name.toUpperCase()}); //no me deja solo name

            if(productDB){
                return res.status(403).json({
                    msg:`El producto ${productDB.name} ya existe`
                });
            }
            
        const { secure_url } = await cloudinary.uploader.upload( tempFilePath, {folder: 'wood'} );
          
            

        const data = {
            ...body,    //voy a mandar todo lo demas
            name: name.toUpperCase(),   //lo coloco asi para poder capitalizar a mayuscula
            category: category,
            img : secure_url,
            // usuario: req.usuarioAuth._id
            
        };
    
            const product = new Product ( data );
            await product.save();
        
            res.status(201).json({product})   

        } catch (error) {
            res.status(400).json({error});
        }   
}


//prueba
const onFileupload = (req, res) => {

    let file = req['files'].thumbnail;
  
    // console.log("File uploaded: ", file.name);
    res.status(200).json(msg= 'ok')
   
  }

  

const getProduct = async (req,res)=>{

    const { limit=1 }=req.query;
    // const { limit , desde }=req.query;
  

    const [ total, product ]  = await Promise.all([

        Product.countDocuments( {state:true} ),
        Product.find( {state:true} )
    //         // .populate('usuario','name')
    //         // .populate('category','name')
    //         // .skip( Number (desde))
            .limit( Number (limit))
    ]);
   
    res.status(200).json({ 
        total,     
        product

    });
}

// const getProductById = async ( req, res ) =>{
    
//     const { id } = req.params;
//     const product = await Product.findById( id ).populate ('usuario','name')
//                                                 .populate ('category','name');
//     res.json(product);
// }



   
// const updateProduct = async ( req, res )=>{

//     const { id } = req.params;
//     const { state, usuario, ...data} = req.body;

//     if(data.name){ //si viene el nombre q lo pase a mayusculas sino q no lo sobreescriba

//     data.name = data.name.toUpperCase();
//     }

//     data.usuario = req.usuarioAuth._id;

//     const product = await Product.findByIdAndUpdate ( id, data, {new: true} );

//     res.json(product);

// }

// const deleteProduct = async ( req, res )=>{

//     const { id } = req.params;
//     const delProduct = await Product.findByIdAndUpdate( id, {state:false},{new:true});

//     res.json(delProduct);

// }

 


module.exports={
  getProduct,
  createProduct,
  onFileupload
//   getProductById,
//   updateProduct,
//   deleteProduct
  
}
