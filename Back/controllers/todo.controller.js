import todoModel from "../models/todo.model.js"

const getTodoList = async (req, res) => {
  try {
    const todoList = await todoModel.find()
    console.log(todoList);
    res.status(200).json({
      success: true,
      message: "Fetch Todo List Successfully",
      result: todoList
    })
  }
  catch (err) {
    res.status(404).json({
      success: false,
      message: "Data not found"
    })
    console.log(err);
  }
}

const createTodo = async (req, res) => {
  console.log(req.body);
  try {
    await todoModel.create(req.body);
    res.json({
      success: true,
      message: "Todo Created SuccessFully"
    })
  }
  catch (err) {
      res.status(500).json({
      success: false,
      message: "Todo created Failed"
    })
    console.log(err);
  }
}

const deleteTodo = async(req, res) => {
  console.log(req.body._id);
  
  const deletedTask = await todoModel.findByIdAndDelete(req.body._id)

  res.json({
    success: true,
    message: "delete a todo Successfully",
    result: deletedTask
  })
}

export { getTodoList, createTodo, deleteTodo }