import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://example.com/user', () => {
    return HttpResponse.json([
      { userId: 1, id: 1, title: '잘드갔냐', completed: false },
      {
        userId: 1,
        id: 2,
        title: '고럼고럼',
        completed: false,
      },
      { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },
      { userId: 1, id: 4, title: 'et porro tempora', completed: true },
      {
        userId: 1,
        id: 5,
        title:
          'laboriosam mollitia et enim quasi adipisci quia provident illum',
        completed: false,
      },
      {
        userId: 1,
        id: 6,
        title: 'qui ullam ratione quibusdam voluptatem quia omnis',
        completed: false,
      },
      {
        userId: 1,
        id: 7,
        title: 'illo expedita consequatur quia in',
        completed: false,
      },
      {
        userId: 1,
        id: 8,
        title: 'quo adipisci enim quam ut ab',
        completed: true,
      },
      {
        userId: 1,
        id: 9,
        title: 'molestiae perspiciatis ipsa',
        completed: false,
      },
      {
        userId: 1,
        id: 10,
        title: 'illo est ratione doloremque quia maiores aut',
        completed: true,
      },
    ]);
  }),
];
