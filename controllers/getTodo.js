// import the model 
const Todo=require("../models/Todo")
// define the route 
exports.getTodo=async (req,res)=>{
   try {
        const todos=await Todo.find({})
        res.status(200).json({
            success:true,
            data:todos,
            message:"entire todos data is fetched "

        })
   }
   catch(error) {
         console.error(error)
         res.status(500).json({
            success:false,
            error:error.message,
            data:"internal server error "
         })

   }
}

exports.getTodobyId= async (req,res)=>{
    try { 
       // extract to do item basis of id 
       const id =req.params.id
       const todos =await Todo.findById({
          _id:id,
 
       })
    if (!todos){
        return res.status(404).json({
          sucess:false,
          message:"no data for the given id"
       })
   
    }
    else {
       res.status(200).json({
        success:true,
          message:`id ${id} is properly found`,
          data:todos
       })
          
    }
     
        }
        catch(error) {
           console.log(error.message)
           res.status(500).json({
                 success:false,
                 message:"server side error "
               })
        }
 }
