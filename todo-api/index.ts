import cors from "cors";
import express from "express";
const app = express();
const port = 1377;

export interface TodoModel {
  id: number;
  title: string;
  done: boolean;
  description?: string;
}

export interface TodoCreateModel {
  title: string;
  description?: string;
}

const memoryStore: { todos: TodoModel[] } = {
  todos: [
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
  ],
};

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ todos: memoryStore.todos });
});
app.get("/:id", (req, res) => {
  const todo = memoryStore.todos.find(
    (todo) => todo.id === Number(req.params.id)
  );
  res.json({ todo: todo });
});

app.post("/", (req, res) => {
  const todo: TodoCreateModel = req.body;
  const newTodo = {
    id: memoryStore.todos.length + 1,
    title: todo.title,
    done: false,
    description: todo.description,
  };
  memoryStore.todos.push(newTodo);
  res.json({ todo: newTodo });
});

app.put("/:id", (req, res) => {
  const todo: TodoModel = req.body;
  const todoIndex = memoryStore.todos.findIndex(
    (todo) => todo.id === Number(req.params.id)
  );
  if (todoIndex === -1) {
    res.status(404).json({ error: "Todo not found" });
  } else {
    memoryStore.todos[todoIndex] = todo;
    res.json({ todo: todo });
  }
});

app.delete("/:id", (req, res) => {
  const todo = memoryStore.todos.find(
    (todo) => todo.id === Number(req.params.id)
  );
  memoryStore.todos = memoryStore.todos.filter(
    (todo) => todo.id !== Number(req.params.id)
  );
  res.json({ todo: todo });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
