import { useCallback, useMemo, useState } from "react";
import { TodoCreateModel, TodoModel } from "../types/todo.model";
import { createNewID } from "../types/utls/id";

export const useTodos = () => {
  const _todoList: Array<TodoModel> = useMemo(() => {
    return [
      {
        id: 0,
        title: "Todo 1",
        done: false,
        description: "Todo 1 description",
      },
      {
        id: 1,
        title: "Todo 2",
        done: false,
        description: "Todo 2 description",
      },
      { id: 2, title: "Todo 3", done: true, description: "Todo 3 description" },
      {
        id: 3,
        title: "Todo 4",
        done: false,
        description: "Todo 4 description",
      },
    ];
  }, []);

  const [search, setSearch] = useState("");

  const [todoList, setTodoList] = useState(_todoList);

  const onSearchChange = useCallback((_search: string) => {
    setSearch(_search);
  }, []);

  const onCreate = useCallback(
    (todoCreateModel: TodoCreateModel) => {
      const newTodo: TodoModel = {
        ...todoCreateModel,
        done: false,
        id: createNewID(),
      };

      const newTodoList = [...todoList, newTodo];
      setTodoList(newTodoList);
    },
    [todoList]
  );

  const onDelete = useCallback(
    (id: number) => {
      const idx = todoList.findIndex((todo) => todo.id === id);
      if (idx > -1) {
        const newTodoList = [...todoList];
        newTodoList.splice(idx, 1);
        setTodoList(newTodoList);
      }
    },
    [todoList]
  );

  const filtered = useMemo(() => {
    return search
      ? todoList.filter(
          (x) =>
            x.title.toLowerCase().includes(search.toLowerCase()) ||
            x.description?.toLowerCase().includes(search.toLowerCase())
        )
      : todoList;
  }, [todoList, search]);

  return { todoList: filtered, search, onSearchChange, onDelete, onCreate };
};
