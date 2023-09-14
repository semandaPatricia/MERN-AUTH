const express = require("express");
const router = express.Router();
const userController = require('../controllers/user.controller.js')
//import {test} from '../controllers/user.controller.js';

app.get ('/' ,(req, res) => {
    res.json({
      message: 'API is working!',
    });
  });

router.get('/', test);

module.exports = router;