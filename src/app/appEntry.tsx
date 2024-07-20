import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter';
import { GlobalStyles } from '../shared/ui/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
);
