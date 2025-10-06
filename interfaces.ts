export interface User {
  id: number;
  name: string;
  loginId: string;
  password: string;
}

export interface ReturnJSONAuth {
  result: number;
  token: string;
  user: User | null;
}

export interface Todo {
  id: number;
  task: string;
  person: string;
  deadline: string;
}

export interface ReturnJSONTodos {
  result: number;
  data: Todo[];
}
