

const upFilesFront = (file) =>{ 

    return new Promise ( ( resolve, reject ) => { 

      
        const sliceName = file.split('.');
        const extension = sliceName[sliceName.length-1];

        const validExtension = [ 'png', 'jpg', 'jpeg','txt'];
        if(!validExtension.includes(extension)){

            return reject (`la extension no esta permitida, solo archivos ${validExtension}`)
        }
         resolve ( file );
          
        });        
}

module.exports ={ upFilesFront}