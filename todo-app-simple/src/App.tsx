import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { useTodos } from "./hooks/useTodos";
import HomePage from "./pages/HomePage";
import NewTodoPage from "./pages/NewTodoPage";
import TodoDetailsPage from "./pages/TodoDetailsPage";

function App() {
  const { todoList, onDelete, onCreate } = useTodos();
  return (
    <div>
      <Link to="/new">Add New Todo </Link>
      <div>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={() => <HomePage todoList={todoList} onDelete={onDelete} />}
          />
          <Route
            exact={true}
            path="/new"
            render={() => <NewTodoPage onCreate={onCreate} />}
          />
          <Route exact={true} path="/:id" component={TodoDetailsPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
