import { Link } from "react-router-dom";

export function TopMenu() {
  return (
    <>
      <div>
        <Link to="/state">useState</Link>
      </div>
      <div>
        <Link to="/reducer">useReducer</Link>
      </div>
    </>
  );
}
