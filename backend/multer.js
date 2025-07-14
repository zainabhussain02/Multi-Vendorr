const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {   
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileName = file.originalname.split('.')[0];
    cb(null, file.fieldname + '-' + uniqueSuffix + ".png");        
    },  
});
const upload = multer({ storage });
module.exports = upload;
 
   

