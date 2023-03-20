const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'Enter the name']
    },
    email : {
        type : String,
        required : [true,'Enter the email'],
        unique : [true,'Must be unique'],
        match : [/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,'Enter valid email address']
    },
    role : {
        type : String,
        enum : ['user','publisher'],
        default : 'user'
    },
    password : {
        type : String,
        required : [true,'Please add a password'],
        minlength : 6,
        select : false
    },
    resetPasswordToken : String,
    resetPasswordexpire : String,
    createdAt : {
        type : Date,
        default : Date.now()
    }
})



userSchema.pre('save',async function (next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    console.log(this.password);
    

})

module.exports = mongoose.model('User',userSchema)