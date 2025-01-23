export type UserProps = {
  id: number;
  username: string;
};

export type AuthProps = {
  token: string;
  userId: number;
  expires: Date;
};

export type RegisterProps = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  branch: number;
};
