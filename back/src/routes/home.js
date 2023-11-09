import express from 'express';

const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
  res.send('Service is running!');
});
export default homeRouter;
