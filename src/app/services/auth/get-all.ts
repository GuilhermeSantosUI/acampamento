import { UserProps } from '@/app/models';
import { api } from '..';

type UsersResponse = Array<UserProps>;

export async function getAll(): Promise<UsersResponse> {
  const { signal } = new AbortController();

  const { data } = await api.get<UsersResponse>(`/users/`, {
    signal,
  });

  return data;
}
