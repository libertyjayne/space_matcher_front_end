import React from "react";
import { Route, Switch } from "react-router-dom";

import AllSpacesPage from "../pages/AllSpaces";
import NewSpacePage from "../pages/NewSpace";
import FavoritesPage from "../pages/Favorites";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <AllSpacesPage />
      </Route>
      <Route path="/new-space">
        <NewSpacePage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
    </Switch>
  );
}

export default Routes;
