import NewsEditor from "@/components/editUI/editors/NewsEditor";
import { newsUpdatesQueryOptions } from "@/queries/newsUpdates/newsUpdatesQueryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/edit/news")({
  loader: async ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(newsUpdatesQueryOptions()),
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useSuspenseQuery(newsUpdatesQueryOptions());

  return <NewsEditor data={data} />;
}
