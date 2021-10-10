import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginView from '../pages/Login/LoginView';
import AllSpacesPage from "../pages/AllSpaces";
import NewSpacePage from "../pages/NewSpace";
import FavoritesPage from "../pages/Favorites";
import LandingPage from '../pages/LandingPage/LandingPageView';

function Routes() {
  return (
    <Switch>
      <Route path='/' exact>
        <LandingPage />
      </Route>
      <Route path='/all' exact>
        <AllSpacesPage />
      </Route>
      <Route path='/login'>
        <LoginView />
      </Route>
      <Route path='/new-space'>
        <NewSpacePage />
      </Route>
      <Route path='/favorites'>
        <FavoritesPage />
      </Route>
    </Switch>
  );
}

export default Routes;
