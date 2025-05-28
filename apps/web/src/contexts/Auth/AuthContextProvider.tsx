import { useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const contextValue = useMemo(() => {
    return { loggedIn, setLoggedIn };
  }, [loggedIn]);

  return <AuthContext value={contextValue}>{children}</AuthContext>;
};
