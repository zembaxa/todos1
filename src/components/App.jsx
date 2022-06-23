import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { ItemsListState } from "./ItemsListState";
import { TopMenu } from "./TopMenu";
import { ItemsListReducer } from './ItemsListReducer';
import { ItemsListStateInput } from "./ItemsListStateInput";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <TopMenu />
          <div className="body">
            <Routes>
              <Route path="/state" element={<ItemsListState />}></Route>
              <Route path="/reducer" element={<ItemsListReducer />}></Route>
              <Route path="/input" element={<ItemsListStateInput />}></Route>
              <Route path="*" element={<Navigate replace to="state" />}></Route>
            </Routes>
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
