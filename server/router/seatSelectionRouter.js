import express from 'express';
import {seatDataController,viewSeatDataController,seatBookController} from '../controller/seatSelectionController.js';
import { upload } from '../middleware/multer.js';
const router = express.Router();

router.get("/seatData", seatDataController);
router.get("/getData", viewSeatDataController);
router.post("/bookSeats", seatBookController);

export default router;
