export interface UserLogin {
  username: string;
  password: string;
}

export interface UserRegister {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface User {
  access_token: string;
  user: { id: number; username: string; email: string };
}
