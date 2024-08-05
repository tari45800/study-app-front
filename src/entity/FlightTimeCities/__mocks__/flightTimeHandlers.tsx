import { http, HttpResponse } from 'msw';
import { apiBaseUrl } from '../../../shared/lib/server/api/apiConfig';
import {
  city_00h30m,
  city_01h00m,
  city_01h30m,
} from '../../../shared/lib/server';

// 연구하세요
export const flightTimeCitiesHandlers = [
  http.get(`${apiBaseUrl}/flights`, ({ request }) => {
    const url = new URL(request.url);
    const flightTime = url.searchParams.get('flightTime');

    if (flightTime === '00h30m') {
      return HttpResponse.json([...city_00h30m]);
    }

    if (flightTime === '01h00m') {
      return HttpResponse.json([...city_01h00m]);
    }

    if (flightTime === '01h30m') {
      return HttpResponse.json([...city_01h30m]);
    }

    return new HttpResponse(null, { status: 404 });
  }),
];
