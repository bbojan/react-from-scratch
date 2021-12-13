import { observer } from "mobx-react-lite";
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
          <Route
            exact={true}
            path="/"
            render={() => (
              <HomePage
                todoList={todoStore.filteredTodos}
                onDelete={todoStore.onDelete}
              />
            )}
          />
          <Route
            exact={true}
            path="/new"
            render={() => <NewTodoPage onCreate={todoStore.onCreate} />}
          />
          <Route exact={true} path="/:id" component={TodoDetailsPage} />
        </Switch>
      </div>
    </div>
  );
}

export default observer(App);
