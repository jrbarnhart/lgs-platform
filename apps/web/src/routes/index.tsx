import { createFileRoute } from "@tanstack/react-router";
import StoreHours from "../components/storeHours/StoreHours";
import News from "../components/news/News";
import Specials from "../components/specials/Specials";
import EditUI from "../components/editUI/EditUI";
import { storeHoursQueryOptions } from "../queries/storeHours/storeHoursQueryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/")({
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(storeHoursQueryOptions());
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { data: storeHours } = useSuspenseQuery(storeHoursQueryOptions());

  return (
    <div>
      <h1>Local Game Store</h1>

      <main>
        <StoreHours data={storeHours} />
        <News />
        <Specials />
      </main>
      <EditUI />
    </div>
  );
}
