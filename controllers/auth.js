const user = require('../model/user')
const Error_Response = require('../util/Error_Response')
const {jwtsign,match_password} = require('../util/validation')

exports.Register = async (req,res,next)=>{
    try {
        console.log(req.body)
     const User = await user.create(req.body);
    if(!User){
        return next(new Error_Response('Invalid',400))
    }
    console.log(User.id)
    const token = await jwtsign(User.id)
    res.status(200).send({
        success: true,
        Message : 'User registered successfully',
        token : token
    })
        
    } catch (error) {
        next(error)
    }
}

exports.login = async (req,res,next)=>{

   try {
    const {email,password} = req.body;
    if(!email || !password){
        return next(new Error_Response('Enter proper email and password',400))
    }


    const User = await user.findOne({email}).select('+password')
    if(!User){
        return (new Error_Response('Invalid Credentials',400))
    }

    if(!match_password(password,User.password)){
        console.log("incorrect password")
        return next(new Error_Response("Invalid Password",401))
    };

    const token = await jwtsign(User.id)

    res.status(200).send({
        success : true,
        token : token
    })
   } catch (error) {
    next(error)
   }

}