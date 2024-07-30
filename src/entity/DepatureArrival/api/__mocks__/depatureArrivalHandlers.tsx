import { http, HttpResponse } from 'msw';
import { arrivalMock } from '../../../../shared/lib/server';
import { apiBaseUrl } from '../../../../shared/lib/server/api/apiConfig';

export const depatureArrivalHandlers = [
  http.get(`${apiBaseUrl}/arrival`, () => {
    return HttpResponse.json([...arrivalMock]);
  }),
];
