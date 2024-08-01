import { http, HttpResponse } from 'msw';
import { apiBaseUrl } from '../../../../shared/lib/server/api/apiConfig';

export const flightTimeHandlers = [
  http.get(`${apiBaseUrl}/arrival`, () => {
    return HttpResponse.json([]);
  }),
];
