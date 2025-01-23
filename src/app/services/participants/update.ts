import { ParticipantProps } from '@/app/models';
import { api } from '..';

export async function update(
  params: ParticipantProps,
): Promise<ParticipantProps> {
  const { data } = await api.put<ParticipantProps>(
    `/participant/?id=${params.id}`,
    params,
  );

  return data;
}
