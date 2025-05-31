import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import type { QueryClient } from "@tanstack/react-query";
import Navigation from "@/components/navigation/Navigation";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  { component: RootComponent }
);

function RootComponent() {
  return (
    <React.Fragment>
      <Navigation />
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
