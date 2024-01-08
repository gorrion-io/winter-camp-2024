import { TanstackProvider } from "@/providers/TanstackProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TanstackProvider>
      <Component {...pageProps} />;
    </TanstackProvider>
  );
}
