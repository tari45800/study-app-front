import { http, HttpResponse } from 'msw';
import { todoMock } from '../../../../shared/lib/server';

export const mainTodoHandlers = [
  http.get('https://example.com/user', () => {
    return HttpResponse.json([...todoMock]);
  }),
];
