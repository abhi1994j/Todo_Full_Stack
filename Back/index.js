import express from "express";
import cors from "cors";
import router from "./routes/todo.routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv"
const app = express();

// Or, enable CORS with specific options for production:
dotenv.config();

const corsOption = {
  origin: [process.env.FRONT_URL, process.env.FRONT],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true
}
app.use(cors(corsOption)) // for cross server data sharing , here we share front end to back end data also vice versa

app.use(express.json()) // all incoming and outgoing response in JSON format 
// console.log(process.env.FRONT_URL);

mongoose.connect(process.env.DB_URL)
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

app.use("/api/v1/todo", router)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
})