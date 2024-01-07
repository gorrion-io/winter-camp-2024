"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, memo, useState } from "react";

type TanstackProviderType = {
  children: ReactNode;
};

export const TanstackProvider = memo<TanstackProviderType>(
  ({ children }: TanstackProviderType) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  }
);
