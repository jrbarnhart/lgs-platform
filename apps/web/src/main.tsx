import { StrictMode } from "react";
import "./index.css";
import ReactDom from "react-dom/client";
import { AuthContextProvider } from "./contexts/Auth/AuthContextProvider.tsx";
import { EditingContextProvider } from "./contexts/Editing/EditingContextProvider.tsx";
import { routeTree } from "./routeTree.gen.ts";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useAuthContext } from "./contexts/Auth/useAuthContext.ts";

// React Query client
const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({
  routeTree,
  context: { queryClient, auth: undefined },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Inner app for adding context to router provider
// eslint-disable-next-line react-refresh/only-export-components
const InnerApp = () => {
  const auth = useAuthContext();
  return <RouterProvider router={router} context={{ auth }} />;
};

const rootElement = document.getElementById("root") as Element;
if (!rootElement.innerHTML) {
  const root = ReactDom.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthContextProvider>
        <EditingContextProvider>
          <QueryClientProvider client={queryClient}>
            <InnerApp />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </EditingContextProvider>
      </AuthContextProvider>
    </StrictMode>
  );
}
