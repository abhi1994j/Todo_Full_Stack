import express from "express";
import { getTodoList , createTodo , deleteTodo } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/get" , getTodoList);
router.post("/create" , createTodo);
router.delete("/delete" , deleteTodo);

export default router;