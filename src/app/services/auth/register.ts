import { RegisterProps } from '@/app/models';
import { api } from '..';

export async function register(params: RegisterProps): Promise<void> {
  const { signal } = new AbortController();
  await api.post(`/register`, params, { signal });
}
