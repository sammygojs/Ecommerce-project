const express = require('express')
const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')

require('dotenv').config()

//import routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

// app.get('/',(req,res)=>{
//     res.send("hello from node");
// })

//db
mongoose.connect(process.env.DATABASE, {
//    userCreateIndex: true
})
.then(()=>console.log("Db connected"));

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())

//routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);

const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`server is running ${port}`);
});

