import express from "express" ;
import cors from "cors";
import router from "./routes/todo.routes.js";
import mongoose from "mongoose";

const app = express();
app.use(cors());

        // Or, enable CORS with specific options for production:
        
        app.use(cors({
            origin: "https://todo-full-stack-1-wbli.onrender.com", // Replace with your frontend's origin
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization']
        }));
        
// const corsOption ={
//   origin: process.env.FRONT_URL,
//   methods: ["GET" , "POST" , "PUT" , "PATCH" , "DELETE"],
//   credentials: true
// }
// app.use(cors(corsOption)) // for cross server data sharing , here we share front end to back end data also vice versa
app.use(express.json()) // all incoming and outgoing response in JSON format 
console.log(process.env.FRONT_URL);
mongoose.connect(process.env.DB_URL)
        .then(()=>console.log("database connected"))
        .catch((err)=>console.log(err));

app.use("/api/v1/todo" , router)

const PORT = process.env.PORT || 8000;

app.listen(PORT ,()=>{
  console.log(`server is running at ${PORT}`);
})