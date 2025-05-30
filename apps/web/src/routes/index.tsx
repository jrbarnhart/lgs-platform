import { createFileRoute } from "@tanstack/react-router";
import StoreHours from "../components/storeHours/StoreHours";
import News from "../components/news/News";
import Specials from "../components/specials/Specials";
import EditUI from "../components/editUI/EditUI";
import { storeHoursQueryOptions } from "../queries/storeHours/storeHoursQueryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { newsUpdatesQueryOptions } from "../queries/newsUpdates/newsUpdatesQueryOptions";

export const Route = createFileRoute("/")({
  loader: async ({ context: { queryClient } }) => {
    await queryClient.ensureQueryData(storeHoursQueryOptions());
    await queryClient.ensureQueryData(newsUpdatesQueryOptions());
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { data: storeHours } = useSuspenseQuery(storeHoursQueryOptions());
  const { data: newsUpdates } = useSuspenseQuery(newsUpdatesQueryOptions());

  return (
    <div>
      <h1>Local Game Store</h1>

      <main>
        <StoreHours data={storeHours} />
        <News data={newsUpdates} />
        <Specials />
      </main>
      <EditUI />
    </div>
  );
}
