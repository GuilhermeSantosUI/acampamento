import { api } from '..';

export async function verifyUsername(username: string): Promise<boolean> {
  const { signal } = new AbortController();

  const { data } = await api.get<boolean>(
    `/verifyUserName?username=${username}`,
    {
      signal,
    },
  );

  return data;
}
