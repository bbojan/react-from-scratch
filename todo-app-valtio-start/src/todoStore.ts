import {
  action,
  computed,
  configure,
  makeObservable,
  observable,
  runInAction
} from "mobx";
import { TodoCreateModel, TodoModel } from "./types/todo.model";

configure({ enforceActions: "always", useProxies: "always" });

class TodoStore {
  // @observable
  isLoading: boolean = false;
  // @observable
  todoList = observable.array<TodoModel>([]);
  // @observable
  isLoaded = false;

  search = "";

  constructor() {
    //makeAutoObservable(this)
    makeObservable(
      this,
      {
        isLoading: observable,
        todoList: observable,
        isLoaded: observable,
        search: observable,
        setSearch: action,
        loadTodos: action,
        onLoadFinished: action,
        onCreate: action,
        onDelete: action,
        filteredTodos: computed,
      },
      { deep: true, autoBind: true }
    );
  }

  //@action.bound
  loadTodos(): void {
    this.isLoading = true;
    fetch("http://localhost:1377/")
      .then((res) => res.json())
      .then((data) => this.onLoadFinished(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(
        action(() => {
          this.isLoading = false;
        })
      );

    //   .finally(()=>{
    //       runInAction(()=>{
    //         this.isLoading = false
    //       })
    //   });
  }

  onLoadFinished(data: any) {
    console.log(data);

    this.isLoaded = true;
    this.todoList.replace(data.todos as TodoModel[]);
  }

  async onCreate(todoCreateModel: TodoCreateModel) {
    try {
      const result = await fetch(`http://localhost:1377/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoCreateModel),
      }).then((res) => res.json());
      console.log(result);
      runInAction(() => {
        this.todoList.push(result.todo);
      });
    } catch (err) {}
  }

  onDelete(id: number) {
    fetch(`http://localhost:1377/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const idx = this.todoList.findIndex((todo) => todo.id === id);
        if (idx > -1) {
          this.todoList.splice(idx, 1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setSearch(search: string) {
    console.log(search);
    this.search = search;
  }

  get filteredTodos(): TodoModel[] {
    console.log(new Date());
    if (this.search) {
      return this.todoList.filter(
        (x) =>
          x.title.toLowerCase().includes(this.search.toLowerCase()) ||
          x.description?.toLowerCase().includes(this.search.toLowerCase())
      );
    }
    return this.todoList;
  }
}

export const todoStore = new TodoStore();
