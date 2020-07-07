import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Fruits from "./components/Fruits";
import Fruit from "./components/Fruit";
import CreateFruit from "./components/CreateFruit";
import EditFruit from "./components/EditFruit";
import DeleteFruit from "./components/DeleteFruit";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/fruits" />
      </Route>
      <Route exact path="/fruits">
        <Fruits />
      </Route>
      <Route exact path="/fruits/:id">
        <Fruit />
      </Route>
      <Route exact path="/fruits/create">
        <CreateFruit />
      </Route>
      <Route exact path="/fruits/:id/edit">
        <EditFruit />
      </Route>
      <Route exact path="/fruits/:id/delete">
        <DeleteFruit />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
