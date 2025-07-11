import { useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import { nanoid } from 'nanoid'
const TodoUI = () => {
  const taskObj = {
    id :nanoid(),
    task: '',
    completed : false
  }
  const [todo , setTodo] = useState(taskObj);

  // console.log(nanoid());
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">My To-Do List</h1>

        {/* Input Section */}
        <TodoCreate todo={todo} setTodo={setTodo} />

        {/* Task List */}
        <TodoList todo={todo}/>
      </div>

    </div>
  );
};

export default TodoUI;
