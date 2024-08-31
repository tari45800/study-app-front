import { http, HttpResponse } from 'msw';
import { apiBaseUrl } from '../../../../shared/lib/server/api/apiConfig';

export const timerPostHandlers = [
  http.post(`${apiBaseUrl}/timerPost`, async ({ request }) => {
    const newPost = await request.json();

    // 로컬 스토리지에서 기존 데이터를 가져옴
    const storedData = localStorage.getItem('timerResults');
    const timerResults = storedData ? JSON.parse(storedData) : [];

    // 새로운 데이터를 배열에 추가 (스프레드 연산자 사용)
    const updatedResults = [newPost, ...timerResults];

    // 배열을 다시 로컬 스토리지에 저장
    localStorage.setItem('timerResults', JSON.stringify(updatedResults));

    // console.log(updatedResults);
    return HttpResponse.json({ status: 201 });
  }),
];
