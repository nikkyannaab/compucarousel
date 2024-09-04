import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {  QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';
import './index.css';
import queryClient from './query-client/query.client.ts';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
