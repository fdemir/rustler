import { Link } from "react-router-dom";

function Tools() {
  return (
    <nav>
      <ul className="flex flex-wrap gap-3">
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="/my-pets">My Pets</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Tools;
