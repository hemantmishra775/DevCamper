const mongoose = require('mongoose')


const connectdb = async () =>
{
    try {
        
   const conn= await mongoose.connect(process.env.MONGO_URL,{
    useNewurlParser : true
})
    console.log(typeof(conn))
    if(!conn){
        console.log(`Database not connected....`)
    }
    else{
        console.log(`Database connected ... ${conn.connection.host}`)
    }
    } catch (error) {
        console.log(`Error response : ${error}`)
    }
}


module.exports = connectdb;