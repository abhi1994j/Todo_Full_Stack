import { useState } from "react";
import instance from "../axios.config";

const TodoCreate = (props) => {
  
  const { todo, setTodo , setTodoList } = props;
  const [flag, setFlag] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  }

  async function postTodo(data) {
    console.log(data);
    try {
      const res = await instance.post("/api/v1/todo/", data);
      console.log(res);
       setTodoList((prev) => [...prev, res.data.result]);
      console.log("todo is submitted successfully");
    } catch (err) {
      console.log(err.message);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.todo.trim()) {
      setFlag(true);
    } else {
      setFlag(false)
      postTodo(todo);
      setIsSubmit(true);
      setTimeout(() => {
        setIsSubmit(false);
      }, 4000);
      setTodo({ todo: "" });
    }
  }

  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          name="todo"
          onChange={handleChange}
          value={todo.todo}
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      {flag && <p className="text-red-400 mb-4">Task is required</p>}
      {isSubmit && (
        <p className="text-green-400 mb-4">Task Submit Successfully</p>
      )}
    </>
  );
};

export default TodoCreate;
