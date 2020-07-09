import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Fruits from "./components/Fruits";
import Fruit from "./components/Fruit";
import CreateFruit from "./components/CreateFruit";
import EditFruit from "./components/EditFruit";
import DeleteFruit from "./components/DeleteFruit";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Fruits />
      </Route>
      <Route path="/fruit/:id">
        <Fruit />
      </Route>
      <Route path="/createFruit">
        <CreateFruit />
      </Route>
      <Route path="/editFruit/:id">
        <EditFruit />
      </Route>
      <Route path="/deleteFruit/:id">
        <DeleteFruit />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
