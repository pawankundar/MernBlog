const express = require('express')
const {signUp} = require('../controller/Auth')
const router = express.Router()


//SIGN UP

router.post('/signup',signUp)


//SIGN IN



module.exports = router