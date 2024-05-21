const express = require("express");
const router = express.Router();

router.get(
  "/user",
  (req, res, next) => {
    console.log("checked");
    next();
  },
  (req, res, next) => {
    console.log("again checked");
    next();
  },
  (req, res) => {
    const user = {
      name: "Meraj",
    };
    res.cookie('name',user.name)
    req.session.name = user.name;
    console.log(user);
    res.send(user);
  }
);

router.get('/set-session', (req,res)=>{
    const name = req.cookies.name;
    req.session.name = name;
    res.send('successfully set the session')
})

router.get('/get-cookie', (req,res)=>{
    const name = req.cookies.name;
    const sessionName = req.session.name;
    res.send(`the value of cookie name is : ${name} and the value of session name : ${sessionName}`)
})

module.exports = router;
