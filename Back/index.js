import express from "express" ;
import cors from "cors";
import router from "./routes/todo.routes.js";
import mongoose from "mongoose";

const app = express();

const corsOption ={
  origin: process.env.FRONT_URL,
  methods: ["GET" , "POST" , "PUT" , "PATCH" , "DELETE"]
}
app.use(cors(corsOption)) // for cross server data sharing , here we share front end to back end data also vice versa


mongoose.connect(process.env.DB_URL)
        .then(()=>console.log("database connected"))
        .catch((err)=>console.log(err));

app.use(express.json()) // all incoming and outgoing response in JSON format 


app.use("/api/v1/todo" , router)

const PORT = process.env.PORT || 8000;

app.listen(PORT ,()=>{
  console.log(`server is running at ${PORT}`);
})