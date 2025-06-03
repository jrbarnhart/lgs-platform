import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/edit/hours')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/edit/hours"!</div>
}
