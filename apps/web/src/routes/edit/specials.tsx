import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/edit/specials')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/edit/specials"!</div>
}
