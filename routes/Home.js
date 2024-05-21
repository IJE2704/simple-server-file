const express = require('express')
const router = express.Router();

router.get('/home', (req,res,next)=>{
    res.send('this is the home page request')
})

module.exports = router