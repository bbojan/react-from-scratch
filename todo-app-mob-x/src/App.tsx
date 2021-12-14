import { Observer, observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import SearchAppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import NewTodoPage from "./pages/NewTodoPage";
import TodoDetailsPage from "./pages/TodoDetailsPage";
import { todoStore } from "./todoStore";

function App() {
  useEffect(() => {
    todoStore.loadTodos();
  }, []);

  return (
    <div>
      <SearchAppBar />
      <div>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/new" component={NewTodoPage} />
          <Route exact={true} path="/:id" component={TodoDetailsPage} />
        </Switch>
      </div>
    </div>
  );
}

export default observer(App);
