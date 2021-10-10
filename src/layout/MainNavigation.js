import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.scss";

function MainNavigation() {
  return (
      <nav>
        <ul>
          <li>
            <Link to="/all">All Spaces</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/new-Space">Add New Space</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
  );
}

export default MainNavigation;
