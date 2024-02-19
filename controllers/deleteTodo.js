// import the model 
const Todo=require("../models/Todo")
// define the route 
exports.deleteTodo=async (req,res)=>{
   try {
    const id =req.params.id
        const todos=await Todo.findByIdAndDelete(id)
        res.status(200).json({
            message:"deleted successfully",
            data:todos,
            success:true

        })
   }
   catch(error) {
    console.log(error.message)
    res.status(500).json({
       message:"server side error ",
       success:false,  
    })
   }
}
