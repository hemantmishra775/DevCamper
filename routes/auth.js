const { Router } = require('express')
const express = require('express')
const router = express.Router()
const {Register,login} = require('../controllers/auth') 

router.post('/register',Register)

router.post('/login',login)

module.exports = router;