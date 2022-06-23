import React, { useReducer } from "react";
import { todos } from "../todo";

// this is a reducer function that modifies current state
const reducer = (state, action) => {
  const stateItem = { ...state[action.index] };
  switch (action.type) {
    case "complete":
      stateItem.status = "done";
      state[action.index] = stateItem;
      return [...state];
    case "undo":
      stateItem.status = "todo";
      state[action.index] = stateItem;
      return [...state];
    default:
      return state;
  }
};

export const ItemsListReducer = () => {
  // hook call
  const [todoItems, dispatch] = useReducer(reducer, todos);

  // handles clicking on the item
  const onClickHandler = (index, status) => {
    switch (status) {
      case "todo":
        dispatch({
          type: "complete",
          index: index,
        });
        return;
      case "done":
        dispatch({
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
        onClick={onClickHandler.bind(this, index, item.status)}
        className={item.status === "done" ? "done" : "todo"}
        key={index}
      >
        {item.txt}
      </li>
    );
  });

  return (
    <>
      <h1>Reducer</h1>
      <ul>{renderList}</ul>
    </>
  );
};
