import { BranchProps } from '@/app/models';
import { api } from '..';

type BranchResponse = Array<BranchProps>;

export async function getAll(): Promise<BranchResponse> {
  const { signal } = new AbortController();

  const { data } = await api.get<BranchResponse>(`/branches/`, {
    signal,
  });

  return data;
}
