const express = require('express');
const app = express();
const dotenv = require('dotenv')
const bootcamp = require('./routes/bootcamp')
const colors = require('colors')
const morgan = require('morgan')
const connectdb = require('./db')
const {error} = require('./middleware/error_handler')
const user = require('./routes/auth')




//configuring the dotenv
dotenv.config({path : './config/config.env'})

//body-parser
app.use(express.json());

//database connection mongo db
connectdb();

//middleware morgan
app.use(morgan('dev'))

app.use('/api/v1',bootcamp);
app.use('/api/v1',user);

app.get('/',(req,res,next)=>{
    console.log("home page");
    res.send({
        Message : "Hello World"
    })
})

app.use(error);

const server = app.listen(process.env.PORT,process.env.HOST,()=>{
    console.log(`server is listening at ` + `http://${server.address().address}:${server.address().port}`.yellow.bold)
})

process.on('unhandledRejection',(err,promise)=>{
    console.log(`Uhandled Rejection : ${err.Message}`)
})