import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import AddInventory from '../pages/AddInventory';
import Login from '../pages/Login';
import Showcase from '../pages/Showcase';
import Inventory from '../pages/Inventory';

export const Routes: React.FC = () => {
  function isLoggedIn(): boolean {
    const userName = localStorage.getItem('@Tickets:user');

    if (userName == '' || userName === null || userName === undefined)
      return false;

    return true;
  }

  return (
    <Switch>
      <Route component={Login} path="/" exact />
      <Route component={Showcase} path="/showcase/:id" />
      {/* <Route render={() => (!isLoggedIn() ? <Redirect to="/" /> : <Home />)} /> */}
      <Route component={Home} path="/home" />
      <Route component={AddInventory} path="/addinventory" />
      <Route component={Inventory} path="/inventory" />
    </Switch>
  );
};
