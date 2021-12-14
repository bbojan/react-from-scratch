import { atom, useAtom } from "jotai";
import { useCallback } from "react";
import { TodoCreateModel, TodoModel } from "./types/todo.model";

export const searchAtom = atom("");
const isLoadingAtom = atom(false);
const isLoadedAtom = atom(false);
const todoListAtom = atom<TodoModel[]>([]);

const filteredTodosAtom = atom((get) => {
  const todoList = get(todoListAtom);
  const search = get(searchAtom);

  if (search) {
    return todoList.filter(
      (x) =>
        x.title.toLowerCase().includes(search.toLowerCase()) ||
        x.description?.toLowerCase().includes(search.toLowerCase())
    );
  }
  return todoList;
});

export const useTodoStore = () => {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [isLoaded, setIsLoaded] = useAtom(isLoadedAtom);
  const [search] = useAtom(searchAtom);
  const [todoList, setTodoList] = useAtom(todoListAtom);
  const [filteredTodos] = useAtom(filteredTodosAtom);

  const loadTodos = useCallback(() => {
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
  }, [setIsLoaded, setIsLoading, setTodoList]);

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
        setTodoList([...todoList, result.todo]);
      } catch (err) {}
    },
    [todoList, setTodoList]
  );

  const onDelete = useCallback(
    (id: number) => {
      fetch(`http://localhost:1377/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          setTodoList(todoList.filter((x) => x.id !== id));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [setTodoList, todoList]
  );

  return {
    loadTodos,
    onCreate,
    onDelete,

    isLoading,
    isLoaded,
    search,
    todoList,

    filteredTodos,
  };
};

// import { proxy } from "valtio";
// import { derive } from "valtio/utils";

// export interface ITodoStore {
//   isLoading: boolean;
//   todoList: TodoModel[];
//   isLoaded: boolean;
//   search: string;
// }

// const store: ITodoStore = {
//   isLoading: false,
//   todoList: [],
//   isLoaded: false,
//   search: "",
// };

// export const state = proxy<ITodoStore>(store);

// export function loadTodos() {
//   state.isLoading = true;

//   fetch("http://localhost:1377/")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       state.isLoaded = true;
//       state.todoList = data.todos as TodoModel[];
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       state.isLoading = false;
//     });
// }

// export async function onCreate(todoCreateModel: TodoCreateModel) {
//   try {
//     const result = await fetch(`http://localhost:1377/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(todoCreateModel),
//     }).then((res) => res.json());
//     console.log(result);

//     state.todoList.push(result.todo);
//   } catch (err) {}
// }

// export function onDelete(id: number) {
//   fetch(`http://localhost:1377/${id}`, {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then(() => {
//       const idx = state.todoList.findIndex((todo) => todo.id === id);
//       if (idx > -1) {
//         state.todoList.splice(idx, 1);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// // create a derived proxy
// export const derivedState = derive({
//   filteredTodos: (get) => {
//     const proxyState = get(state);
//     console.log(new Date());
//     if (proxyState.search) {
//       return proxyState.todoList.filter(
//         (x) =>
//           x.title.toLowerCase().includes(proxyState.search.toLowerCase()) ||
//           x.description?.toLowerCase().includes(proxyState.search.toLowerCase())
//       );
//     }
//     return proxyState.todoList;
//   },
// });
