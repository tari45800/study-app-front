import { createBrowserRouter } from 'react-router-dom';
import { baseLayout } from './layouts/baseLayout';
import { LoginPage } from '../pages/login';
import { MainPage } from '../pages/main';

export const appRouter = createBrowserRouter([
  {
    element: baseLayout,
    errorElement: <div>존제하지 않는 페이지 입니다.</div>,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);
