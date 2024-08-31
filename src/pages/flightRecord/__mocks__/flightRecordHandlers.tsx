import { http, HttpResponse } from 'msw';
import { apiBaseUrl } from '../../../shared/lib/server/api/apiConfig';

export const flightRecordHandlers = [
  http.get(`${apiBaseUrl}/flightRecord`, ({ request }) => {
    const url = new URL(request.url);
    const idx = url.searchParams.get('idx');
    const storedData = localStorage.getItem('timerResults');
    let timerResults = storedData ? JSON.parse(storedData) : [];

    const item =
      idx !== null
        ? timerResults[idx]
        : timerResults.length > 0
          ? timerResults[0]
          : null;

    return HttpResponse.json(item);
  }),
];
