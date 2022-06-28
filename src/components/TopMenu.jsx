import { Link } from "react-router-dom";

export function TopMenu() {
  return (
    <div className="menu">
      <div>
        <Link to="/state">useState</Link>
      </div>
      <div>
        <Link to="/reducer">useReducer</Link>
      </div>
      <div>
        <Link to="/input">withInput</Link>
      </div>
      <div>
        <Link to="/context">useContext</Link>
      </div>
      <div>
        <Link to="/context-reducer">useContextReducer</Link>
      </div>
    </div>
  );
}
