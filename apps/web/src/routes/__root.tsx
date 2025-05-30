import * as React from "react";
import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useAuthContext } from "../contexts/Auth/useAuthContext";
import type { QueryClient } from "@tanstack/react-query";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  { component: RootComponent }
);

function RootComponent() {
  const { loggedIn, setLoggedIn } = useAuthContext();

  const handleLoginButton = () => {
    setLoggedIn((prev) => !prev);
  };

  const handleCommitButton = () => {
    window.location.reload();
  };

  return (
    <React.Fragment>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <button type="button" onClick={handleLoginButton}>
          {loggedIn ? "Logout" : "Login"}
        </button>
        {loggedIn && (
          <button type="button" onClick={handleCommitButton}>
            Commit Changes
          </button>
        )}
      </nav>
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
