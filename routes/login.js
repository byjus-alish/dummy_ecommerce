const express = require('express')
const router  = express.Router();

const {loginUser} = require('../controllers/login')

router.route('/login').get(loginUser);

module.exports = router;