import multer from "multer";
import { fileURLToPath } from 'url';
import path from 'path';
// var storage = multer.diskStorage({
//     destination: "../uploads",
//     filename: function (req, file, cb) {
//             cb(null, file.fieldname + '-' + Date.now())
//           }
// })
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../client/public/uploads'));
  },
  filename: (req, file, cb) => {
    const originalname = file.originalname;
    cb(null, originalname);
  },
});

var upload = multer({
    storage: storage
}).fields([
    { name: 'brandLogo', maxCount: 1 },
    { name: 'TheaterImage', maxCount: 1 },
    { name: 'theaterLicenceImage', maxCount: 1 },
]);

var eventMulterMiddleware = multer({
    storage: storage
}).fields([
    { name: 'eventPoster', maxCount: 1},
    { name: 'agreementImage', maxCount: 1},
]);

// var upload10 = multer({
//     storage: storage
// }).fields([
//     { name: 'companyImg', maxCount: 1 }
// ]);

export {upload,eventMulterMiddleware};