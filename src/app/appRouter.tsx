import { createBrowserRouter, Link } from 'react-router-dom';
import { baseLayout } from './layouts/baseLayout';
import { LoginPage } from '../pages/login';
import { MainPage } from '../pages/main';
import { ChooseCitePage } from '../pages/chooseCite';
import { TimerPage } from '../pages/timer';
import { ResultPage } from '../pages/result';
import { FlightRecordPage } from '../pages/flightRecord';

export const appRouter = createBrowserRouter([
  {
    element: baseLayout,
    errorElement: (
      <>
        <div>존제하지 않는 페이지 입니다.</div>
        <Link to={'/'}>메인으로 돌아가기</Link>
      </>
    ),
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/chooseCite',
        element: <ChooseCitePage />,
      },
      {
        path: '/timerPage',
        element: <TimerPage />,
      },
      {
        path: '/resultPage',
        element: <ResultPage />,
      },
      {
        path: '/flightTime',
        element: <FlightRecordPage />,
      },
    ],
  },
]);
