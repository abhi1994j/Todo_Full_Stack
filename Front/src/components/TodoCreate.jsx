
const TodoCreate = () => {
  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add
        </button>
      </div>
    </>
  );
};

export default TodoCreate;
