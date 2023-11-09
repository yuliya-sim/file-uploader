import path from 'node:path';

const fileFilter = (req, file, callback) => {
  const allowedFileTypes = ['.txt', '.jpg', '.png', '.gif', '.svg', '.mp4', '.mov', '.avi', '.pdf'];

  const fileExtension = path.extname(file.originalname);
  if (allowedFileTypes.includes(fileExtension)) {
    callback(null, true);
  }
  else {
    callback(null, false);
  }
};
export default fileFilter;
