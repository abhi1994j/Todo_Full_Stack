import todoModel from "../models/todo.model.js"

const getTodoList = async (req, res) => {
  try {
    const todoList = await todoModel.find()
    // console.log(todoList);
    if (todoList) {
      res.status(200).json({
        success: true,
        message: "Fetch Todo List Successfully",
        result: todoList
      })
    }
    else {
      res.status(404).json({
        success: false,
        message: "Data not found"
      })
    }

  }
  catch (err) {
    console.log(err.message);
  }
}

const getTodo = async (req, res) => {
  console.log(req.params.id);
  try {
    const todo = await todoModel.findById(req.params.id)
    // console.log(todoList);
    if (todo) {
      res.status(200).json({
        success: true,
        message: "Fetch Todo Successfully",
        result: todo
      })
    }
    else {
      res.status(404).json({
        success: false,
        message: "Data not found"
      })
    }
  }
  catch (err) {
    console.log(err.message);
  }
}

const createTodo = async (req, res) => {
  // console.log(req.body);
  try {
    const todo = await todoModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Todo Created SuccessFully",
      result: todo
    })
  }
  catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
    console.log(err);
  }
}

const updateTodoList = async (req, res) => {
  console.log(req.body.id);
  try {
    const updateTask = await todoModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (updateTask) {
      res.json({
        success: true,
        message: "Update a todo list Successfully",
        result: updateTask
      })
    }
  }
  catch (err) {
     res.status(404).json({
      success: false,
      message: err.message
    })
    console.log(err);
  }
}

const deleteTodo = async (req, res) => {
  console.log(req.params.id);
  const deletedTask = await todoModel.findByIdAndDelete(req.params.id)
  res.json({
    success: true,
    message: "delete a todo Successfully",
    result: deletedTask
  })
}

export { getTodoList, getTodo, createTodo, updateTodoList, deleteTodo }