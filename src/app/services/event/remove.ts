import { api } from '..';

export async function remove(id: string): Promise<void> {
  await api.delete(`/event/?id=${id}`);
}
