import { use } from "react";
import { MenuContext } from "./MenuContext";

export const useMenuContext = () => {
  const context = use(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
};
