import multer from "multer";

var storage = multer.diskStorage({
    destination: "../uploads",
    filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now())
          }
})

var upload = multer({
    storage: storage
}).fields([
    { name: 'brandLogo', maxCount: 1 },
    { name: 'TheaterImage', maxCount: 1 },
    { name: 'theaterLicenceImage', maxCount: 1 },
]);


// var upload10 = multer({
//     storage: storage
// }).fields([
//     { name: 'companyImg', maxCount: 1 }
// ]);

export {upload};