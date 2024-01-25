import express from 'express';
import { eventMulterMiddleware } from '../middleware/multer.js';
import { eventRegistrationController,eventGetDataController} from '../controller/eventRegistrationController.js';
var eventRouter = express.Router();

eventRouter.post('/eventRegistration',eventMulterMiddleware,eventRegistrationController);
eventRouter.get('/getEventData',eventGetDataController)
export default eventRouter;
