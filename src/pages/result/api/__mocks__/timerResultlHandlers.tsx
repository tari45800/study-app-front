import { http, HttpResponse } from 'msw';
import { apiBaseUrl } from '../../../../shared/lib/server/api/apiConfig';
2;

export const timerResultlHandlers = [
  http.get(`${apiBaseUrl}/timerResult`, () => {
    const storedData = localStorage.getItem('timerResults');
    let timerResults = storedData ? JSON.parse(storedData) : [];

    // 첫 번째 요소를 가져옴 (없으면 null 반환)
    const firstItem = timerResults.length > 0 ? timerResults[0] : null;
    localStorage.setItem('todoList', JSON.stringify([]));

    return HttpResponse.json(firstItem);
  }),
];
