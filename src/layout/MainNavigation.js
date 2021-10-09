import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.scss";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Spaces</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Spaces</Link>
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
    </header>
  );
}

export default MainNavigation;
