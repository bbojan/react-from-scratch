import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useSnapshot } from "valtio";
import SearchAppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import NewTodoPage from "./pages/NewTodoPage";
import TodoDetailsPage from "./pages/TodoDetailsPage";
import { state, loadTodos, onCreate, onDelete } from "./todoStore";

function App() {
  const snap = useSnapshot(state);

  useEffect(() => {
    loadTodos();
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
              <HomePage todoList={snap.filteredTodos!} onDelete={onDelete} />
            )}
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
