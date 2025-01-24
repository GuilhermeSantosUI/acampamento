import { getAll } from './get-all';
import { register } from './register';
import { verifyUsername } from './verify-username';
import {auth} from "./auth.ts";

export const authService = {
  auth,
  register,
  getAll,
  verifyUsername,
};
