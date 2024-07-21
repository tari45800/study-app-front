import { http, HttpResponse } from 'msw';
import { loginMock } from '../../../../shared/lib/server';

export const loginWidgetHandlers = [
  http.get('https://example.com/login', () => {
    return HttpResponse.json([...loginMock]);
  }),
];
