import instance from "../axios.config";

const TodoList = (props) => {
  const { todoList , setTodoList} = props;

  async function handleDelete(id) {
     try {
      await instance.delete("/api/v1/todo/delete", {
        data: { id: id }
      });
      setTodoList((prev) => prev.filter((ele) => ele._id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <>
      <ul className="space-y-3">
        {todoList.map((ele) => {
          // console.log(ele.todo);
          return (
            <li
              key={ele._id}
              className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded border"
            >
              <div className="flex items-center gap-2">
                {/* <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
            />  */}
                <span className="text-gray-700">{ele.todo}</span>
              </div>
              <button
                onClick={() => handleDelete(ele._id)}
                className="text-red-500 hover:text-red-700 cursor-pointer"
              >
                ✕
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
