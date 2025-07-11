
const TodoList = () => {
  return (
    <>
      <ul className="space-y-3">
        <li className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded border">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="text-gray-700">Buy groceries</span>
          </div>
          <button className="text-red-500 hover:text-red-700">✕</button>
        </li>
        <li className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded border">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="text-gray-700">Walk the dog</span>
          </div>
          <button className="text-red-500 hover:text-red-700">✕</button>
        </li>
      </ul>
    </>
  );
};

export default TodoList;
