import { atom, useAtom } from "jotai";
import { TodoCreateModel, TodoModel } from "./types/todo.model";

const isLoadingAtom = atom(false);
const isLoadedAtom = atom(false);
const searchAtom = atom("");
const todoListAtom = atom<TodoModel[]>([]);

const filteredTodosAtom = atom((get) => {
  const todoList = get(todoListAtom);
  const search = get(searchAtom);

  console.log(new Date());

  if (search) {
    return todoList.filter(
      (x) =>
        x.title.toLowerCase().includes(search.toLowerCase()) ||
        x.description?.toLowerCase().includes(search.toLowerCase())
    );
  }
  return todoList;
});

export function useTodoStore() {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [isLoaded, setIsLoaded] = useAtom(isLoadedAtom);
  const [search, setSearch] = useAtom(searchAtom);
  const [todoList, setTodoList] = useAtom(todoListAtom);
  const [filteredTodos] = useAtom(filteredTodosAtom);

  function loadTodos() {
    setIsLoading(true);

    fetch("http://localhost:1377/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoaded(true);
        setTodoList(data.todos as TodoModel[]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function onCreate(todoCreateModel: TodoCreateModel) {
    try {
      const result = await fetch(`http://localhost:1377/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoCreateModel),
      }).then((res) => res.json());
      console.log(result);
      setTodoList([...todoList,result.todo]);
    } catch (err) {}
  }

   function onDelete(id: number) {
    fetch(`http://localhost:1377/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setTodoList(todoList.filter(x => x.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return {
    isLoading,
    isLoaded,
    search,
    todoList,
    filteredTodos,
    setSearch,
    onDelete,
    onCreate,
    loadTodos,
  };
}
