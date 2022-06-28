import React from "react";
import { todos } from '../../todo';

export const ItemsListState = () => {
  const [todoItems, setTodoItems] = React.useState(todos);

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

  return (
    <>
      <h1>State</h1>
      <ul>{renderList}</ul>
    </>
  );
};
