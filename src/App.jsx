import { useState } from "react";
import Addtodo from "./components/Addtodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";


function App() {
  const [todoItem, settodoItem] = useState([])

  //use this when not based on old value
  // const inAddButton = (name, dueDate) => {
  //   const newTodoItems = [...todoItem, { name: name, dueDate: dueDate }]
  //   settodoItem((newTodoItems))
  // }

  const inAddButton = (name, dueDate) => {
    settodoItem((currValue) => [...currValue, { name: name, dueDate: dueDate }])
  }
  const inDeleteButton = (todoItemName) => {
    const newTodoItems = todoItem.filter(item => item.name !== todoItemName)
    settodoItem(newTodoItems)
  }

  return (
    <>
      <center className="text-4xl"><AppName /></center>
      <Addtodo inAddButton={inAddButton} />
      {todoItem.length === 0 && <center><WelcomeMsg /></center>}
      <TodoItems todoItems={todoItem} inDeleteButton={inDeleteButton} />
    </>
  );
}

export default App;
