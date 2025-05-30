import { createFileRoute } from "@tanstack/react-router";
import StoreHours from "../components/storeHours/StoreHours";
import News from "../components/news/News";
import Specials from "../components/specials/Specials";
import EditUI from "../components/editUI/EditUI";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Local Game Store</h1>

      <main>
        <StoreHours />
        <News />
        <Specials />
      </main>
      <EditUI />
    </div>
  );
}
