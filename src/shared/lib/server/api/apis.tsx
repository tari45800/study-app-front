import { api } from './api';

export const getData = async (url: string) => {
  return await api.get(url).then((res) => res.data);
};
