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
  const { loggedIn, setLoggedIn } = useAuthContext();

  const handleLoginButton = () => {
    setLoggedIn((prev) => !prev);
  };

  const handleCommitButton = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>Local Game Store</h1>
      <nav>
        <button type="button" onClick={handleLoginButton}>
          {loggedIn ? "Logout" : "Login"}
        </button>
        {loggedIn && (
          <button type="button" onClick={handleCommitButton}>
            Commit Changes
          </button>
        )}
      </nav>
      <main>
        <StoreHours loggedIn={loggedIn} />
        <News loggedIn={loggedIn} />
        <Specials loggedIn={loggedIn} />
      </main>
      <EditUI />
    </div>
  );
}
