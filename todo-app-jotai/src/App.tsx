import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import SearchAppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import NewTodoPage from "./pages/NewTodoPage";
import TodoDetailsPage from "./pages/TodoDetailsPage";
import { useTodoStore } from "./todoStore";

function App() {
  const { loadTodos, filteredTodos, onDelete, onCreate } = useTodoStore()

  useEffect(() => {
    loadTodos();  
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    todoList={filteredTodos}
                    onDelete={onDelete}
                  />
        
     
            )}
          />
          <Route
            exact={true}
            path="/new"
            render={() => (

             <NewTodoPage onCreate={onCreate} />
           
            )}
          />
          <Route exact={true} path="/:id" component={TodoDetailsPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
