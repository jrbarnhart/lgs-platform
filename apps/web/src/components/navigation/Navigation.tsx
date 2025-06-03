import { useAuthContext } from "@/contexts/Auth/useAuthContext";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";
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
    setLoggedIn((prev) => !prev);
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
        {loggedIn ? "Logout" : "Login"}
      </Button>
    </nav>
  );
}

const AdminNavigation = () => {
  return (
    <Menubar>
      <p className="text-sm">Admin:</p>
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
