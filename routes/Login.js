const express = require('express');
const router = express.Router();

router.get('/login', (req,res,next)=>{
    res.send("this is login page")
})

module.exports = router