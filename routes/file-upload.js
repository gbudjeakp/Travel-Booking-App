const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const upload = require('../services/file-upload');

const singleUpload = upload.single('file');

router.post('/file-upload', auth, function(req, res) {
  const user = res.locals.user;
  singleUpload(req, res, function(err) {
    if (err) {
      return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] });
    }
    user.pictureUrl = req.file.location;
    user.save();
    return res.json({'imageUrl': req.file.location});
  });
});

module.exports = router;