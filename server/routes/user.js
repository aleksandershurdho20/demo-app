const express = require('express')

const router = express.Router();
const { register, login,getLoggedInUser } = require('../controllers/user.js');
router.post('/register', register)
router.post('/login', login)
router.get("/user",getLoggedInUser)
module.exports = router