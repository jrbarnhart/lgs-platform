import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/edit")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>Hello "/edit"!</p>
      <Outlet />
    </div>
  );
}
