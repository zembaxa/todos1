import React, { useContext } from "react";
import { HelloWordContext } from "../providers/TodosContext";

export const ItemsAddContext = ({ addTodoFn }) => {
  const [todoInput, setTodoInput] = React.useState("");
  const helloWorld = useContext(HelloWordContext);

  // button click handler; adds new todo item to the collection
  const onTodoAdd = () => {
    // construct new todo item
    const newTodoItem = {
      status: "todo",
      txt: todoInput,
    };

    // push the item to the collection
    addTodoFn(newTodoItem);

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
        <h1>Context value: {helloWorld}</h1>
        <label>New todo</label> <br />
        <input type="text" onChange={onInputChange} value={todoInput} /> <br />
        <button onClick={onTodoAdd} disabled={todoInput.length === 0}>
          Add
        </button>
      </div>
    </>
  );
};