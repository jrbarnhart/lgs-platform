import { createContext, type SetStateAction } from "react";

export type AuthContextType = {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);
