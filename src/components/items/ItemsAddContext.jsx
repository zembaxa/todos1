import React, { useContext } from "react";
import { TodosContext } from "../providers/TodosContext";

export const ItemsAddContext = () => {
  const [todoInput, setTodoInput] = React.useState("");
  const store = useContext(TodosContext);

  // create new array to break the reference
  const todoItems = [...store.todoItems];

  // button click handler; adds new todo item to the collection
  const onTodoAdd = () => {
    // construct new todo item
    const newTodoItem = {
      status: "todo",
      txt: todoInput,
    };

    todoItems.push(newTodoItem);
    store.setTodoItems([...todoItems]);

    // clear the input
    setTodoInput("");
  };

  // controls the input
  const onInputChange = (evt) => {
    setTodoInput(evt.target.value);
  };

  return (
    <>
      <div>
        <label>New todo</label> <br />
        <input type="text" onChange={onInputChange} value={todoInput} /> <br />
        <button onClick={onTodoAdd} disabled={todoInput.length === 0}>
          Add
        </button>
      </div>
    </>
  );
};
