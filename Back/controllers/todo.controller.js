const getTodoList = (req,res)=>{
  res.json({
    success:true,
    message:"get TodoList data"
  })
}

const createTodo = (req,res)=>{
  res.json({
    success:true,
    message:"create a todo"
  })
}

const deleteTodo = (req,res)=>{
  res.json({
    success:true,
    message:"delete a todo"
  })
}

export {getTodoList , createTodo , deleteTodo}