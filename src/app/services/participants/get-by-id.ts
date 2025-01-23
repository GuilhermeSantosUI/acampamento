import { ParticipantProps } from '@/app/models';
import { api } from '..';

export async function getById(id: string): Promise<ParticipantProps> {
  const { data } = await api.get<ParticipantProps>(`/participant/?id=${id}`);

  return data;
}
