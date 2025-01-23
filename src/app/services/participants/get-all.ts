import { ParticipantProps } from '@/app/models';
import { api } from '..';

type ParticipantResponse = Array<ParticipantProps>;

export async function getAll(): Promise<ParticipantResponse> {
  const { signal } = new AbortController();

  const { data } = await api.get<ParticipantResponse>(`/participants/`, {
    signal,
  });

  return data;
}
