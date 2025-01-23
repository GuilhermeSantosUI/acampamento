import { EventProps } from '@/app/models';
import { api } from '..';

export async function update(params: EventProps): Promise<EventProps> {
  const { data } = await api.put<EventProps>(`/event/?id=${params.id}`, params);

  return data;
}
