import { randomUUID } from 'node:crypto';
import multer from 'multer';
import path from 'node:path';
import fs from 'node:fs';
import fileFilter from '../validators/file-validator.js';

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const fileExtension = path.extname(file.originalname);
    const fileType = fileExtension.substring(1);

    const targetFolder = path.join('uploads', fileType);

    fs.mkdir(targetFolder, { recursive: true }, () => {
      callback(null, targetFolder);
    });
  },
  filename: (req, file, callback) => {
    callback(null, `${randomUUID()}-${file.originalname}`);
  }
});
const upload = multer({
  fileFilter,
  storage,
  limits: {
    fileSize: 1000 * 1024 * 1024 // 1000MB file size limit
  }
}).single('multimedia');

export default upload;
