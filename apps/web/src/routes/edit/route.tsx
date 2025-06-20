import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/edit")({
  beforeLoad: ({ context }) => {
    if (!context.auth?.loggedIn) {
      redirect({ to: "/", throw: true });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grow flex flex-col overflow-hidden">
      <Outlet />
    </div>
  );
}
