import { useAuthContext } from "@/contexts/Auth/useAuthContext";
import { Button } from "../ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";

export default function Navigation() {
  const { loggedIn, setLoggedIn } = useAuthContext();

  const handleLoginButton = () => {
    setLoggedIn(true);
  };

  return (
    <nav>
      {loggedIn && <AdminNavigation />}
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
        Log In
      </Button>
    </nav>
  );
}

const AdminNavigation = () => {
  const { setLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  const handleLogoutButton = () => {
    setLoggedIn(false);
    void navigate({ to: "/" });
  };

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Admin</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={handleLogoutButton}>Logout</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <Link to="/edit/news">
            <MenubarItem>News & Updates</MenubarItem>
          </Link>
          <Link to="/edit/hours">
            <MenubarItem>Hours</MenubarItem>
          </Link>
          <Link to="/edit/events">
            <MenubarItem>Events</MenubarItem>
          </Link>
          <Link to="/edit/specials">
            <MenubarItem>Specials & Deals</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
