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
import { useMenuContext } from "@/contexts/Menu/useMenuContext";

export default function Navigation() {
  const { open: menuOpen } = useMenuContext();

  return (
    <nav>
      {menuOpen && <AdminNavigation />}
      <Button variant="link" asChild>
        <Link to="/">Home</Link>
      </Button>
      <Button variant="link" asChild>
        <Link to="/events">Events</Link>
      </Button>
    </nav>
  );
}

const AdminNavigation = () => {
  const { loggedIn, setLoggedIn } = useAuthContext();
  const { setOpen: setMenuOpen } = useMenuContext();

  const navigate = useNavigate();

  const handleLoginButton = () => {
    setLoggedIn(true);
    void navigate({ to: "/" });
  };

  const handleLogoutButton = () => {
    setLoggedIn(false);
    setMenuOpen(false);
    void navigate({ to: "/" });
  };

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Admin</MenubarTrigger>
        {loggedIn ? (
          <MenubarContent>
            <MenubarItem onClick={handleLogoutButton}>Logout</MenubarItem>
          </MenubarContent>
        ) : (
          <MenubarContent>
            <MenubarItem onClick={handleLoginButton}>Login</MenubarItem>
          </MenubarContent>
        )}
      </MenubarMenu>
      {loggedIn && (
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
      )}
    </Menubar>
  );
};
