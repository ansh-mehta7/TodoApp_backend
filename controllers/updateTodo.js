// import the model 
const Todo=require("../models/Todo")
// define the route 
exports.updateTodo=async (req,res)=>{
   try {
        const {id}= req.params
        const {title,description}=req.body;
        const todos=await Todo.findByIdAndUpdate(
         {
            _id:id,

         },
         {
            title:title,description:description ,updatedAt:Date.now()
         }
        ) 
        res.status(200).json({
         success:true,
         data:todos,
         message:"data updated succesfully"
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
