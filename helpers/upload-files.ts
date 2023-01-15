import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import multer from "multer";


 const storage = multer.diskStorage({
  destination: 'uploads',
  filename : (req, file, callback) => {
      callback(null, uuidv4() + path.extname(file.originalname));
  },
})

export default multer({storage})