import { useEffect, useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import instance from "../axios.config";

const TodoUI = () => {
  const taskObj = {
    todo: '',
    // completed : false
  }

  const [todo , setTodo] = useState(taskObj);
  const [todoList , setTodoList] = useState([]);

 useEffect(() => {
   getTodoList();
 }, [])
 
 async function getTodoList() {
  const res = await instance.get("/api/v1/todo/get");
  console.log(res.data);
  setTodoList(res.data.result)
 }
  // console.log(nanoid());
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">My To-Do List</h1>

        {/* Input Section */}
        <TodoCreate todo={todo} setTodo={setTodo} />

        {/* Task List */}
        <TodoList todoList={todoList}/>
      </div>

    </div>
  );
};

export default TodoUI;
