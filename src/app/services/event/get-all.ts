import { EventProps } from '@/app/models';
import { api } from '..';

type EventResponse = Array<EventProps>;

export async function getAll(): Promise<EventResponse> {
  const { signal } = new AbortController();

  const { data } = await api.get<EventResponse>(`/events/`, {
    signal,
  });

  return data;
}
