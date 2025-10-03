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
