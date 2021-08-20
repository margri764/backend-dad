const { google } = require('googleapis');
const nodemailer = require("nodemailer");


const orderNote  = async( req, res, next) => {  
    
    let dataArrayReq=[];
 
    dataArrayReq=req.body;
    // console.log(dataArrayReq)
      
    let contentHtml="";
    let tabla="";
    let data="";
    for (const prod of dataArrayReq){

       data =  `<tr> ${prod.name} </tr>
                <tr> ${prod.email} </tr>
                <tr> ${prod.phone} </tr>
                `
        
       tabla+=    
        `           
           <tr> 
                       
             <td> ${prod.title}       </td>
             <td> ${  prod.quantity}  </td>
             <td> ${prod.unit_price}  </td>
             <td> ${prod.unit_price * prod.quantity} </td>      
           </tr>           
         `;
      }

      contentHtml=`
      <h3> Datos del cliente</h3>
      <tr> ${data} </tr>
      <br><hr><br>
      <table >
            <thead>
                <tr>
                    <th> Descripción     </th>
                    <th> Cantidad        </th>
                    <th> Precio unitario </th>
                    <th> Sub Total       </th>                          
                </tr>
            </thead>
            <tbody>
            ${tabla}      
                
            </tbody>
     </table>            

      `




const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const SECRET_ID = process.env.GOOGLE_SECRET_ID;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    SECRET_ID,
    REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(){
    try {

        const accessToken = await oAuth2Client.getAccessToken()

         const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              type: "OAuth2",
              user: process.env.EMAIL,
              accessToken: accessToken,
              clientId: process.env.GOOGLE_CLIENT_ID,
              clientSecret: process.env.GOOGLE_SECRET_ID,
              refreshToken: process.env.REFRESH_TOKEN
            },
          });

          const mailOptions = {
              from: "Dulce Alma Deco",
              to: process.env.EMAIL,
              subject: "Data from web",
              html: contentHtml,
          };
        
        const result = await transporter.sendMail(mailOptions);     
      
        res.status(200).json("true")
        return result

    } catch (error) {
        next(error)
   }
}

sendMail()
.then (result => res.status(200))
.catch(error =>  next(error))
};

// res.json({msg: "mensaje enviado con exito"})
// };

module.exports = orderNote;
