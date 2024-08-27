import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter';
import { GlobalStyles } from '../shared/GlobalStyle';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Provider as ModalProvider } from '@ebay/nice-modal-react';
import { useThemeStore } from './appStore';

async function enableMocking() {
  // if (process.env.NODE_ENV !== 'development') {
  //   return;
  // }

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
  const App = () => {
    const isDarkMode = useThemeStore((state) => state.isDarkMode);

    return (
      <React.StrictMode>
        <ModalProvider>
          <QueryClientProvider client={queryClient}>
            <GlobalStyles isDarkMode={isDarkMode} />
            <RouterProvider router={appRouter} />
          </QueryClientProvider>
        </ModalProvider>
      </React.StrictMode>
    );
  };

  ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
});
