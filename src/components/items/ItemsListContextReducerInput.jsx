import React from "react";
import { ItemsAddContextReducer } from './ItemsAddContextReducer';
import { useDispatch, useSelector } from 'react-redux'
import { counterSlice } from "../../redux/reducer";

export const ItemsListContextReducerInput = () => {
  const todoItems = useSelector((state) => state.counter.todos);
  const dispatch = useDispatch();

  // updates status of an item
  const changeStatus = (index, status) => {
    switch (status) {
      case 'todo':
        dispatch(counterSlice.actions.complete({index: index}));
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
