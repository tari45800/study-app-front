import { api } from './api';

export const getData = async (url: string) => {
  try {
    return await api.get(url).then((res) => res.data);
  } catch (err) {
    console.error('get요청 중 애러 발생', err);
    throw err;
  }
};

export const postData = async (url: string, data: any) => {
  try {
    return await api.post(url, data).then((res) => res.data);
  } catch (err) {
    console.error('post요청 중 애러 발생', err);
    throw err;
  }
};
