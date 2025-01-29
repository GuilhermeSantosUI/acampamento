import { api } from '..';

type AuthProps = {
  login: string;
  password: string;
};

type ResponseProps = {
  token: string;
  userId: number;
  expires: string;
};

export async function auth(params: AuthProps) {
  const { signal } = new AbortController();

  const authHeader = `Basic ${btoa(`${params.login}:${params.password}`)}`;

  const { data } = await api.post<ResponseProps>(
    '/auth',
    {},
    {
      signal,
      headers: {
        Authorization: authHeader,
      },
    },
  );

  return data;
}
