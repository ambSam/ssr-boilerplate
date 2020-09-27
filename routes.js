import React from "react";
import { Route } from "react-router-dom";
import Home from "./src/client/components/Home";
import UsersList from "./src/client/components/users-list";
import Card from "./src/client/components/display-card";

export default () => {
  return (
    <div>
      <Route exact path="/" component={Card} />
      <Route exact path="/users" component={UsersList} />
    </div>
  );
};
