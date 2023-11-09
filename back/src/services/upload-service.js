export default class UploadService {
  constructor() {
    this.upload.bind(this);
  }

  static upload(req, res) {
    if (!req.file) {
      return res.status(400).send('No file received or unsupported file type');
    }

    const uploadedFile = req.file;
    return res.json(`File ${uploadedFile.originalname} was received and saved'`);
  }
}
