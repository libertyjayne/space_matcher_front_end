import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Login = lazy(() => import('../pages/Login/LoginView'));
const Favorites = lazy(() => import ('../pages/Favorites'));

const routes = [
  <Route path="/login" exact component={Login} />,
  <Route path="/favorites" exact component={Favorites} />,
]

export default routes