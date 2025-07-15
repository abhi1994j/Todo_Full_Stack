import express from "express";
import { getTodoList ,getTodo , createTodo ,updateTodoList, deleteTodo } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/" , getTodoList);
router.get("/:id" , getTodo);
router.post("/" , createTodo);
router.put("/:id" , updateTodoList )
router.delete("/:id" , deleteTodo);

export default router;