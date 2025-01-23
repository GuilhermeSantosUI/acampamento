import { ParticipantProps } from '@/app/models';
import { api } from '..';

export async function create(params: ParticipantProps): Promise<void> {
  await api.post(`/participant/`, params);
}
