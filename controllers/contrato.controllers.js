
const fs = require ('fs');
const path = require ('path');
const dbPath = path.join (__dirname, '../uploads/');


const { v4: uuidv4 } = require('uuid');

const ImgFormat = require ('../models/img64');


const representante = async (req, res)=>{
          
   
        const { voucher } = req.body; 

        // console.log(voucher)

        let voucherJpg;
        let voucherRandom;
        let voucherSlice;
        let arrImg = [];
        let arrImgT = [];

        // AGREGAR CONDICIONAL PARA EL MAP VACIO !!
        
        voucher.map( item => (
            item = item.toString(),
            // console.log(item),
            voucherJpg = item.slice(22),
            voucherSlice = voucherJpg,
             voucherJpg = uuidv4() + '.jpg',
             voucherRandom = voucherJpg,      
            arrImg.push(voucherRandom),
            arrImgT.push(voucherSlice)

        ))
       

   
        try {

               
            let item3;
            let item4;
            let arrToSaveInDb = [];

            for (var i = 0; i < arrImg.length; i++) {

                    item3 = arrImg[i],
                    item4 = arrImgT[i];
                    fs.writeFileSync(dbPath + item3, item4,'base64')
                    arrToSaveInDb.push( dbPath + item3 )
               
             }

                  
         
           
          img = {
              img: arrToSaveInDb
          }  

          const imgToSave = ImgFormat(img)  

          await imgToSave.save() 
          res.status(200).json({img})

            
        } catch (error) {
// OJO MIRAR EL ERROR DE TOO LONG

            console.log(error)
            res.send(error)
        }    
       


}

module.exports = { representante }