
const ImgFormat = require ('../models/img64');
const fs = require ('fs');
const path = require ('path');

const representante = async (req, res)=>{
          
   
        const { voucher } = req.body; 
        let voucherJpg = voucher.toString();

        voucherJpg = voucherJpg.slice(22,-1)

        let voucherRandom = Math.random().toString() + '.jpg';
       

        const dbPath = path.join (__dirname, '../uploads/');
   
        try {

            fs.writeFileSync(dbPath + voucherRandom, voucherJpg,'base64')
            console.log(" write file ");
    
          
           
          img = {
              img: "../uploads/" + voucherRandom
          }  

          const imgToSave = ImgFormat(img)  

          await imgToSave.save() 
          res.status(200).json({img})

            
        } catch (error) {
            console.log(error)
            res.send(error)
        }


  
 

     


  
              
       


}

module.exports = { representante }