const express = require('express')
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const router = express.Router();
const { register, login, getLoggedInUser,regiserWithFace, loginWithFace } = require('../controllers/user.js');
router.post('/register', register)
router.post('/login', login)
router.get("/user",getLoggedInUser)
router.post("/face-register",upload.single('file'),regiserWithFace)
router.post("/face-login",upload.single('file'),loginWithFace)

module.exports = router