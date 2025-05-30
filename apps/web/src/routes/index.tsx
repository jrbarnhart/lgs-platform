import { createFileRoute } from "@tanstack/react-router";
import { useAuthContext } from "../contexts/Auth/useAuthContext";
import StoreHours from "../components/storeHours/StoreHours";
import News from "../components/news/News";
import Specials from "../components/specials/Specials";
import EditUI from "../components/editUI/EditUI";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { loggedIn } = useAuthContext();

  return (
    <div>
      <h1>Local Game Store</h1>

      <main>
        <StoreHours loggedIn={loggedIn} />
        <News loggedIn={loggedIn} />
        <Specials loggedIn={loggedIn} />
      </main>
      <EditUI />
    </div>
  );
}
