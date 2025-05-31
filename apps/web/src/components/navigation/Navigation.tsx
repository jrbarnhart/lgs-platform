import { useAuthContext } from "@/contexts/Auth/useAuthContext";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";

export default function Navigation() {
  const { loggedIn, setLoggedIn } = useAuthContext();

  const handleLoginButton = () => {
    setLoggedIn((prev) => !prev);
  };

  const handleCommitButton = () => {
    window.location.reload();
  };

  return (
    <nav>
      <Button variant="link" asChild>
        <Link to="/">Home</Link>
      </Button>
      <Button variant="link" asChild>
        <Link to="/events">Events</Link>
      </Button>
      <Button
        variant="link"
        onClick={handleLoginButton}
        className="cursor-pointer"
      >
        {loggedIn ? "Logout" : "Login"}
      </Button>
      {loggedIn && (
        <Button onClick={handleCommitButton} className="cursor-pointer">
          Commit Changes
        </Button>
      )}
    </nav>
  );
}
