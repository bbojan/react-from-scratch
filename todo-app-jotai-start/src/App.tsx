import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import SearchAppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import NewTodoPage from "./pages/NewTodoPage";
import TodoDetailsPage from "./pages/TodoDetailsPage";
import { searchAtom, useTodoStore } from "./todoStore";

function App() {
  const { loadTodos, filteredTodos, onDelete, onCreate } = useTodoStore();
  const [search, setSearch] = useAtom(searchAtom);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  return (
    <div>
      <SearchAppBar />
      <div
        style={{ margin: "20px 50%" }}
        onDoubleClick={() => {
          setSearch("");
        }}
      >
        {search}
      </div>
      <div>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={() => (
              <HomePage todoList={filteredTodos} onDelete={onDelete} />
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
