const express = require('express');
const router = express.Router();
const {getbootcamps,getbootcamp,createbootcamp,deletebootcamp,updatebootcamp} = require('../controllers/bootcamp')
const protect = require('../middleware/auth_protect')

router
.route('/bootcamp')
.get(getbootcamps)
.post(protect,createbootcamp)

router
.route('/bootcamp/:id')
.get(getbootcamp)
.delete(deletebootcamp)
.put(updatebootcamp)



module.exports = router;