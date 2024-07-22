import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter';
import { GlobalStyles } from '../shared/ui/GlobalStyle';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

async function enableMocking() {
  // process.env.NODE_ENV Vite에 의해 development로 자동으로 설정된다.
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./apiMockWorker');
  return worker.start();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
});

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles></GlobalStyles>
        <RouterProvider router={appRouter} />
      </QueryClientProvider>
    </React.StrictMode>,
  );
});
