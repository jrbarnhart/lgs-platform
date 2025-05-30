import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EditUI from "./components/editUI/EditUI";
import News from "./components/news/News";
import Specials from "./components/specials/Specials";
import StoreHours from "./components/storeHours/StoreHours";
import { useAuthContext } from "./contexts/Auth/useAuthContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const { loggedIn, setLoggedIn } = useAuthContext();

  const handleLoginButton = () => {
    setLoggedIn((prev) => !prev);
  };

  const handleCommitButton = () => {
    window.location.reload();
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
