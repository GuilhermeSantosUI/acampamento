import { auth } from './auth.ts';
import { getAll } from './get-all';
import { register } from './register';
import { verifyUsername } from './verify-username';

export const authService = {
  auth,
  register,
  getAll,
  verifyUsername,
};
