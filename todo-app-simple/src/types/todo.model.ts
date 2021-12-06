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
