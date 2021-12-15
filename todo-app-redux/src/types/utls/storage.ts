import { TodoCreateModel, TodoModel } from "../todo.model";
import { delayed } from "./date";
import { createNewID } from "./id";

const storage = {
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  },
};

export const todoDb = {
  getAll: async () => {
    await delayed(250);
    return (storage.get("todos") || []) as TodoModel[];
  },
  add: async (todo: TodoCreateModel) => {
    const todos = await todoDb.getAll();
    const newTodo = { ...todo, id: createNewID(), done: false } as TodoModel;
    todos.push(newTodo);
    await delayed(250);
    storage.set("todos", todos);
  },
  remove: async (id: number) => {
    const todos = await todoDb.getAll();
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
      await delayed(250);
      storage.set("todos", todos);
    }
  },
  update: async (todo: TodoModel) => {
    const todos = await todoDb.getAll();
    todos.splice(todos.indexOf(todo), 1, todo);
    await delayed(250);
    storage.set("todos", todos);
  },
};
