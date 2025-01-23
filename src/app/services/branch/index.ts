import { create } from './create';
import { getAll } from './get-all';
import { getById } from './get-by-id';
import { remove } from './remove';
import { update } from './update';

export const branchsService = {
  getById,
  update,
  create,
  remove,
  getAll,
};
