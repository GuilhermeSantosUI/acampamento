import { BranchProps } from '@/app/models';
import { api } from '..';

export async function create(params: BranchProps): Promise<void> {
  await api.post(`/branch/`, params);
}
