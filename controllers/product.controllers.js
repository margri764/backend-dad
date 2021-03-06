
const { upFilesFront } = require('../helpers/upload-files');
const Product = require ('../models/product');
const Category = require ('../models/category');
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
            res.status(400).json( {error} );
        }   
}


//prueba
const onFileupload = (req, res) => {

    let file = req['files'].thumbnail;
  
    // console.log("File uploaded: ", file.name);
    res.status(200).json(msg= 'ok')
   
  }

  

const getProduct = async (req,res)=>{

    const quantityDocs  = Number (req.query.quantityDocs) || 0;

  try {
      

    const [ total, product ] = await Promise.all([

        Product.countDocuments( {state:true} ),
        Product
             .find( {state:true} )
         
    //         // .populate('usuario','name')
    //         // .populate('category','name')
            .skip( quantityDocs)
            .limit(16)
    ]);
   
    res.status(200).json({ 
        total,     
        product

    });
} catch (error) {
    res.status(501).json({
        msg: 'base de datos no operativa'
    })  
      
}
}

const getProductSearch = async ( req, res) =>{
    
    const nameFromFront = req.query.nameItem;
    // const nameSplit = nameFromFront.split(' ');
    // const nameToSearch = nameSplit[0];
 
    try {
        // const productDB = await Product.findOne({name:name.toUpperCase()});
        // const [ total, product ] = await Promise.all([
        //     Product.countDocuments( {state:true} ),
        //     Product
        //          .find( {state:true} )   
        //         .skip( quantityDocs)
        //         .limit(4)
        // ]);
        regex = nameFromFront;
        const [ product ] = await Promise.all([    
         
            Product.find ({
                name:{ 
                "$regex": regex,
                // "$options": "is"
            }})
         
           ]);

        //    const arrayItem = [];
        //    arrayItem.push(product)
        // console.log("desde",arrayItem)

       
        res.status(200).json({ 
           product
        //    arrayItem
            // category

    
        });
    } catch (error) {
        res.status(501).json({
            msg: 'base de datos no operativa'
        })  
          
    }


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
  onFileupload,
  getProductSearch
//   getProductById,
//   updateProduct,
//   deleteProduct
  
}
