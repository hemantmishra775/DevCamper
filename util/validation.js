const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const jwtsign = (id) =>{
   return new Promise ((resolve,reject)=>{
    const token = jwt.sign({id:id},process.env.JWT_SECRET);
    resolve(token);
    
   })
}

const match_password = async (enteredpassword,password)=>{
    const ismatch = await bcrypt.compare(enteredpassword,password)
    console.log(ismatch);
    return ismatch;
}

module.exports = {jwtsign,match_password};