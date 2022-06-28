import { useState } from "react";
import { createContext } from "react";
import { todos } from '../../todo';

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState(todos);
  const store = {
    todoItems: todoItems,
    setTodoItems: setTodoItems
  };
  return (
    <TodosContext.Provider value={store}>
      {children}
    </TodosContext.Provider>
  );
}