import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FetchProvider } from "../context/FetchProvider";
import ErrorBoundary from "./error/errorBoundary";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <FetchProvider>
            <Component {...pageProps} />;
            <ReactQueryDevtools initialIsOpen={false} />
          </FetchProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}
