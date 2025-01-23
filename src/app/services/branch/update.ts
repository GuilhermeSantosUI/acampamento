import { BranchProps } from '@/app/models';
import { api } from '..';

export async function update(params: BranchProps): Promise<BranchProps> {
  const { data } = await api.put<BranchProps>(
    `/branch/?id=${params.id}`,
    params,
  );

  return data;
}
