import { useMemo, useState } from "react";
import { MenuContext } from "./MenuContext";

export const MenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  const contextValue = useMemo(() => {
    return { open, setOpen };
  }, [open]);

  return <MenuContext value={contextValue}>{children}</MenuContext>;
};
