import { StrictMode } from "react";
import "./index.css";
import ReactDom from "react-dom/client";
import { AuthContextProvider } from "./contexts/Auth/AuthContextProvider.tsx";
import { EditingContextProvider } from "./contexts/Editing/EditingContextProvider.tsx";
import { routeTree } from "./routeTree.gen.ts";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// React Query client
const queryClient = new QueryClient();

const rootElement = document.getElementById("root") as Element;
if (!rootElement.innerHTML) {
  const root = ReactDom.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthContextProvider>
        <EditingContextProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </EditingContextProvider>
      </AuthContextProvider>
    </StrictMode>
  );
}
