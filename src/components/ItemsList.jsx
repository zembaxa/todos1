import React from "react";
import { todos } from "../todo";

export const ItemsList = () => {
  const [todoItems, setTodoItems] = React.useState(todos);

  // updates status of an item
  const changeStatus = (indx) => {
    // console.log("click", indx, todos[0]);
    todoItems[indx].status = todoItems[indx].status === "done" ? "todo" : "done";
    setTodoItems([...todoItems]);
    console.log("todos", todoItems);
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

  // console.log("Render");

  return <ul>{renderList}</ul>;
};
