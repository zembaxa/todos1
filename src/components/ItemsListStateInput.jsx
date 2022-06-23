import React from "react";
import { todos } from "../todo";

export const ItemsListStateInput = () => {
  const [todoItems, setTodoItems] = React.useState(todos);
  const [todoInput, setTodoInput] = React.useState("");

  // updates status of an item
  const changeStatus = (indx) => {
    todoItems[indx].status =
      todoItems[indx].status === "done" ? "todo" : "done";
    setTodoItems([...todoItems]);
  };

  // renders list of items
  const renderList = todoItems.map((item, index) => {
    return (
      <li
        onClick={changeStatus.bind(this, index)}
        className={item.status === "done" ? "done" : "todo"}
        key={index}
      >
        {item.txt}
      </li>
    );
  });

  // button click handler; adds new todo item to the collection
  const onTodoAdd = () => {
    // construct new todo item
    const newTodoItem = {
      status: "todo",
      txt: todoInput,
    };

    // push the item to the collection
    todoItems.push(newTodoItem);

    // update the component state
    setTodoItems([...todoItems]);

    // clear the input
    setTodoInput("");
  };

  // controls the input
  const onInputChange = (evt) => {
    setTodoInput(evt.target.value);
  };

  return (
    <>
      <h1>State</h1>
      <div>
        <label>New todo</label> <br />
        <input type="text" onChange={onInputChange} value={todoInput} /> <br />
        <button onClick={onTodoAdd} disabled={todoInput.length === 0}>
          Add
        </button>
      </div>
      <ul>{renderList}</ul>
    </>
  );
};
