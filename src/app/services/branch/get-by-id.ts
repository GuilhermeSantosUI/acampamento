import { BranchProps } from '@/app/models';
import { api } from '..';

export async function getById(id: string): Promise<BranchProps> {
  const { data } = await api.get<BranchProps>(`/branch/?id=${id}`);

  return data;
}
