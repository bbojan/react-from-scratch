import React, { FC, useContext } from "react";
import { useTodos } from "./hooks/useTodos";

export const TodoContext = React.createContext<ReturnType<typeof useTodos>>({
  todoList: [],
  onCreate: () => {},
  onDelete: () => {},
  onSearchChange: () => {},
  search: "",
});

export const TodoProvider: FC<{}> = ({ children }) => {
  const todoDB = useTodos();

  return <TodoContext.Provider value={todoDB}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  const ctx = useContext(TodoContext);
  return ctx;
};
