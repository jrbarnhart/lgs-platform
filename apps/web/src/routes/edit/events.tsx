import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/edit/events')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/edit/events"!</div>
}
