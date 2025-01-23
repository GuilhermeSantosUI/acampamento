import { EventProps } from '@/app/models';
import { api } from '..';

export async function getById(id: string): Promise<EventProps> {
  const { data } = await api.get<EventProps>(`/event/?id=${id}`);

  return data;
}
