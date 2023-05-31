 import express from 'express';
  import { userEmailMessage } from '../controllers/userController.js';

 const router = express.Router();

  router.post('/emailMessage',userEmailMessage)



 export default router;