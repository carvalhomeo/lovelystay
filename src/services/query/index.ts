import { QueryCache, QueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error: any, query) => {
      toast.error(`Something went wrong: ${error.message}`);
    },
  }),
});

export default queryClient;
