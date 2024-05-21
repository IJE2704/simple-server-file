const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session');

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret:'your secret key',
    resave:false,
    saveUninitialized: true,
    cookie:{secure:false}
}))

const PORT = 3000;
const path = require('path')
const homeRoute = require("./routes/Home.js")
const loginRoute = require("./routes/Login.js")
const userRoute = require('./routes/User.js')
const foodRouter = require('./routes/Foods.js')
const formRouter = require('./routes/FormData.js')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/static', express.static(path.join(__dirname, 'Static files'))) 

app.get('/ceo', (req,res)=>{
    res.sendFile(path.join(__dirname,'Static files/ceo.png'))
})

const midCheck = (req,res,next) => {
    console.log("mid checked")
    next();
}

app.use(midCheck)

app.use('/', homeRoute)
app.use('/',loginRoute)
app.use('/', userRoute)
app.use('/', foodRouter)
app.use('/', formRouter)


app.get('/',(req,res)=> {
    res.send("Hello")
})



app.get('/html', (req,res)=> {
    res.set('Content-Type', 'text/html')
    res.status(200).send("<h1> Hello Meraj !</h1>")
})

app.listen(PORT, () => {
    console.log("Listening on port " + PORT)
})
