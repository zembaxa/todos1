import React, { useContext } from "react";
import { TodosContext } from "../providers/TodosContext";
import { ItemsAddContextReducer } from './ItemsAddContextReducer';

export const ItemsListContextReducerInput = () => {
  const store = useContext(TodosContext);

  // create new array to break the reference
  const todoItems = [...store.todoItems];

  // updates status of an item
  const changeStatus = (index, status) => {
    switch (status) {
      case "todo":
        store.dispatch({
          type: "complete",
          index: index,
        });
        return;
      case "done":
        store.dispatch({
          type: "undo",
          index: index,
        });
        return;
      default:
        return;
    }
  };

  // renders list of items
  const renderList = todoItems.map((item, index) => {
    return (
      <li
        onClick={changeStatus.bind(this, index, item.status)}
        className={item.status === "done" ? "done" : "todo"}
        key={index}
      >
        {item.txt}
      </li>
    );
  });

  return (
    <>
      <h1>State Context Reducer</h1>
      <ItemsAddContextReducer />
      <ul>{renderList}</ul>
    </>
  );
};
