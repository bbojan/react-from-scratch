import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePageContexted from "./pages/HomePageContexted";
import NewTodoPageContexted from "./pages/NewTodoPageContexted";
import TodoDetailsPage from "./pages/TodoDetailsPage";

function ContextedApp() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact={true} path="/" component={HomePageContexted} />
          <Route exact={true} path="/new" component={NewTodoPageContexted} />
          <Route exact={true} path="/:id" component={TodoDetailsPage} />
        </Switch>
      </div>
    </div>
  );
}

export default ContextedApp;
