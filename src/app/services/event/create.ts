import { EventProps } from '@/app/models';
import { api } from '..';

export async function create(params: EventProps): Promise<void> {
  await api.post(`/event/`, params);
}
