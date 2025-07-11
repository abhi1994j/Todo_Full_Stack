import mongoose from "mongoose";

const jobsSchema = mongoose.Schema({
  todo :{
    type : String ,
    required : true
  }
})
const todoModel = mongoose.model("todo" , jobsSchema);

export default todoModel;