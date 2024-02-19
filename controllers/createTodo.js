// import the model 
const Todo=require("../models/Todo")
// define the route 
exports.createTodo=async (req,res)=>{
   try {
  // extract title and descriptoon from  req body 
      const {title ,description }=req.body 
      // create a new to do object and insert in db 
     const response =await Todo.create({title,description})
     // sending json  response 
     res.status(200).json({
        success :true,
        data:response,
        message :"data is created successfully "

     })

   }
   catch(error) {
          console.log(error)
          console.error(error)
          res.stataus(500).json({
            success:false,
            data:"internal server error ",
            message :error.message,
          })
   }
}
