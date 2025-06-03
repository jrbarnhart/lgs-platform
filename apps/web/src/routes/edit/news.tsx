import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/edit/news')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/edit/news"!</div>
}
