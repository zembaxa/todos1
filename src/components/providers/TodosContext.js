import { useReducer } from "react";
import { createContext } from "react";
import { todos } from '../../todo';

export const TodosContext = createContext();

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
    case "add":
      return [...state, action.newItem];
    default:
      return state;
  }
};

export const TodosContextProvider = ({ children }) => {
  const [todoItems, dispatch] = useReducer(reducer, todos);


  const store = {
    todoItems: todoItems,
    dispatch: dispatch
  };
  return (
    <TodosContext.Provider value={store}>
      {children}
    </TodosContext.Provider>
  );
}