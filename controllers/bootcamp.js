const { error } = require("../middleware/error_handler");
const Bootcamp = require('../model/bootcamp')
const ErrorResponse = require('../util/Error_Response')


//getting all the bootcamps
exports.getbootcamps = (req,res,next)=>{
    console.log("getting all the bootcamps");
    res.send({
        success : true,
        Message : 'Get all the bootcamps'
    })
}


//getting particular bootcamp
exports.getbootcamp = async (req,res,next)=>{
    try {
        const {id} = req.params
    const bootcamp = await Bootcamp.findById(req.params.id)
   if(!bootcamp){
    console.log("popop");
   return res.send({
        success : "False",
        Message : `Didn't find bootcamp with id ${id}`
    })
   }
   else{
    res.send({
        success : true,
        Message : bootcamp
    })
   }
    } catch (error) {
        console.log("here");
       next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`,404))
    }
    

}

//creating the bootcamp
exports.createbootcamp = async (req,res,next)=>{
    try {
       const bootcamp = await Bootcamp.create(req.body)
       if(bootcamp){
        console.log('data Entered properly');
        console.log(bootcamp.id);
        res.send({
            success : true,
            Message : `Bootcamp created with id ${bootcamp.id}`
        })
       }
           
    } catch (error) {
        console.log(`Error in data entry : ${error}`)
        next(error)
    }
}


//deleting the bootcamp
exports.deletebootcamp = (req,res,next)=>{
    console.log(req.body)
    console.log("deleteing the bootcamps");
    res.send({
        success : true,
        Message : 'deleting the bootcamps'
    })
}


exports.updatebootcamp = (req,res,next)=>{
    console.log(req.body)
    console.log("Updating the bootcamps");
    res.send({
        success : true,
        Message : 'updating the bootcamps'
    })
}


