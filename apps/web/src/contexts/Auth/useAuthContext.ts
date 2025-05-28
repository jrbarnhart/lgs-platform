import { use } from "react";
import { AuthContext } from "./AuthContext";

export const useAuthContext = () => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
};
