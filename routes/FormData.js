const express = require('express')
const router = express.Router();

router.post('/form', (req,res)=>{
    const formData = req.body;
    console.log(formData)
    res.send('Form submitted successfully')
})

module.exports = router