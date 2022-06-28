import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { TopMenu } from "./TopMenu";
import { ItemsListReducer } from "./items/ItemsListReducer";
import { TodosContextProvider } from "./providers/TodosContext";
import { ItemsListState } from './items/ItemsListState';
import { ItemsListStateInput } from './items/ItemsListStateInput';

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
