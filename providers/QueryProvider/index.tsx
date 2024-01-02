'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react';

interface IQueryProviderProps {
  children: ReactNode;
}

export const QueryProvider = ({ children }: IQueryProviderProps) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
