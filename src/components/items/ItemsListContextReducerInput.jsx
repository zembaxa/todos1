import React, { useContext } from "react";
import { ItemsAddContext } from "./ItemsAddContext";
import { TodosContext } from "../providers/TodosContext";

export const ItemsListContextReducerInput = () => {
  const store = useContext(TodosContext);
  
  // create new array to break the reference
  const todoItems = [...store.todoItems];

  // updates status of an item
  const changeStatus = (indx) => {
    todoItems[indx].status =
      todoItems[indx].status === "done" ? "todo" : "done";
      store.setTodoItems([...todoItems]);
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
      <ItemsAddContext />
      <ul>{renderList}</ul>
    </>
  );
};
