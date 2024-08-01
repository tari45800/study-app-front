import { http, HttpResponse } from 'msw';
import { apiBaseUrl } from '../../../shared/lib/server/api/apiConfig';
import { city_01h00m } from '../../../shared/lib/server';

export const flightTimeCitiesHandlers = [
  http.get(`${apiBaseUrl}/flights?flightTime=01h00m`, () => {
    return HttpResponse.json([...city_01h00m]);
  }),
];
