import express from 'express';
import middlewares from '../middlewares/multer.js';
import limiter from '../validators/rate-limit.js';
import UploadService from '../services/upload-service.js';

const uploadRouter = express.Router();

uploadRouter.post('/', limiter, middlewares, UploadService.upload);

export default uploadRouter;
