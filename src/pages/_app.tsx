import GlobalStyle from "../styles/global";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../services/query";
import { Toaster } from "../components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
