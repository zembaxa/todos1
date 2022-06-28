import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { TopMenu } from "./TopMenu";
import { ItemsListReducer } from "./items/ItemsListReducer";
import { TodosContextProvider } from "./providers/TodosContext";
import { ItemsListState } from './items/ItemsListState';
import { ItemsListStateInput } from './items/ItemsListStateInput';
import { ItemsListContextInput } from "./items/ItemsListContextInput";
import { ItemsListContextReducerInput } from './items/ItemsListContextReducerInput';

function App() {
  return (
    <BrowserRouter>
      <TodosContextProvider>
        <div className="App">
          <header className="App-header">
            <TopMenu />
            <div className="body">
              <Routes>
                <Route path="/state" element={<ItemsListState />}></Route>
                <Route path="/reducer" element={<ItemsListReducer />}></Route>
                <Route path="/input" element={<ItemsListStateInput />}></Route>
                <Route path="/context" element={<ItemsListContextInput />}></Route>
                <Route path="/context-reducer" element={<ItemsListContextReducerInput />}></Route>
                <Route
                  path="*"
                  element={<Navigate replace to="state" />}
                ></Route>
              </Routes>
            </div>
          </header>
        </div>
      </TodosContextProvider>
    </BrowserRouter>
  );
}

export default App;
