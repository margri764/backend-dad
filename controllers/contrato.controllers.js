
const fs = require ('fs');
const { container } = require('googleapis/build/src/apis/container');
const path = require ('path');
const { v4: uuidv4 } = require('uuid');

//crear la carpeta  "uploads" en el raiz. Verificar bien la ruta a la carpeta
const dbPath = path.join (__dirname, '../uploads/');

const ImgFormat = require ('../models/img64');


const contrato = async (req, res)=>{
          
   
        const { voucher, ...body } = req.body; 
    //   console.log(req.body);

        let voucherJpg;
        let voucherNuevoNombreRandom;
        let voucherSlice;
        let arregloImg = [];
        let arregloImgT = [];
        let voucherValidator=[];
        let noImage;

        
        if(voucher === null ){

            console.log('se debe incluir un voucher')
       
            return res.status(500).json({msg: 'se debe incluir un voucher'})

        };

        voucher.map( item => (
            item = item.toString(),
           voucherValidator.push( item.slice(0,11) )
        ))

        noImage = voucherValidator.filter(item => item !== "data:image/");


        if(noImage != []){
            console.log('solo se permiten img')
            return res.status(500).json({msg: 'solo se permiten imagenes'})
        } else {
            voucher.map( item => (
                item = item.toString(),
                voucherJpg = item.slice(22),
                voucherSlice = voucherJpg,
                voucherJpg = uuidv4() + '.jpg',
                voucherNuevoNombreRandom = voucherJpg,      
                arregloImg.push(voucherNuevoNombreRandom),
                arregloImgT.push(voucherSlice)
        ))
        }
       

   
        try {

               
            let pathRandom;
            let fileSliceBase64;
            let arrToSaveInDb = [];

            for (var i = 0; i < arregloImg.length; i++) {

                    pathRandom = arregloImg[i],
                    fileSliceBase64 = arregloImgT[i];
                    fs.writeFileSync(dbPath + pathRandom, fileSliceBase64,'base64')
                    arrToSaveInDb.push( dbPath + pathRandom )
               
             }

                  
         
           
          const dataToDb = {
              ...body,
              voucher: arrToSaveInDb
          }  

          const imgToSave = new ImgFormat(dataToDb)  

          await imgToSave.save() 
             res.status(200).json({dataToDb})

            
        } catch (error) {

            res.send(error)
        }    
       


}

module.exports = { contrato }