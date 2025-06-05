import { createContext, type SetStateAction } from "react";

export type MenuContextType = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextType | null>(null);
