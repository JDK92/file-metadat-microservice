//  IMPORTS
const { Router } = require("express");
const multer = require('multer');

const router = Router();
const upload = multer({ dest: 'uploads/' });

//  MIDDLEWARES
const { checkFile } = require("../middlewares/middlewares");

//  CONTROLLERS
const {
  getIndex,
  postFile
} = require("../controllers/controllers");

//  ROUTES
router.get('/', getIndex);

router.post('/api/fileanalyse',
  [
    upload.single('upfile'),
    checkFile
  ],
  postFile
);

module.exports = router;