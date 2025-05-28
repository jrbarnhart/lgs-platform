import News from "./components/news/News";
import Specials from "./components/specials/Specials";
import StoreHours from "./components/storeHours/StoreHours";
import { useAuthContext } from "./contexts/Auth/useAuthContext";
import { useEditingContext } from "./contexts/Editing/useEditingContext";

function App() {
  const { loggedIn, setLoggedIn } = useAuthContext();

  const handleLoginButton = () => {
    setLoggedIn((prev) => !prev);
  };

  const handleCommitButton = () => {
    window.location.reload();
  };

  const { editing } = useEditingContext();

  return (
    <div>
      {editing.state && <p>Editing: {editing.section || "Undefined"}</p>}
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
    </div>
  );
}

export default App;
