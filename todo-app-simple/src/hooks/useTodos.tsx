import { useCallback, useEffect, useMemo, useState } from "react";
import { TodoCreateModel, TodoModel } from "../types/todo.model";

export const useTodos = () => {
  const [search, setSearch] = useState("");

  const [todoList, setTodoList] = useState<TodoModel[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);

  function loadTodos() {
    fetch("http://localhost:1377/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoaded(true);
        setTodoList(data.todos as TodoModel[]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (!isLoaded) {
      loadTodos();
    }
  }, [isLoaded]);

  const onSearchChange = useCallback((_search: string) => {
    setSearch(_search);
  }, []);

  const onCreate = useCallback(
    async (todoCreateModel: TodoCreateModel) => {
      try {
        const result = await fetch(`http://localhost:1377/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todoCreateModel),
        }).then((res) => res.json());
        console.log(result);
        const newTodoList = [...todoList, result.todo];
        setTodoList(newTodoList);
      } catch (err) {}
    },
    [todoList]
  );

  const onDelete = useCallback(
    (id: number) => {
      fetch(`http://localhost:1377/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          const idx = todoList.findIndex((todo) => todo.id === id);
          if (idx > -1) {
            const newTodoList = [...todoList];
            newTodoList.splice(idx, 1);
            setTodoList(newTodoList);
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
