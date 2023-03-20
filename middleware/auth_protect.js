const jwt = require('jsonwebtoken')
const user = require('../model/user')
const Error_Response = require('../util/Error_Response')


const protect = (req,res,next) =>{

    console.log(req.headers);
    const token_bearer = req.headers.authorization.split(' ')[0];
    if(token_bearer != 'Bearer'){
        return next(new Error_Response('enter bearer toekn',400))
    }
    console.log(req.headers.authorization.split(' ')[1])
    const token =req.headers.authorization.split(' ')[1];

    const payload = jwt.verify(token,process.env.JWT_SECRET);
    console.log(payload)
    next();

}



module.exports = protect;