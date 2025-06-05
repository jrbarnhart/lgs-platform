import { useMenuContext } from "@/contexts/Menu/useMenuContext";
import { useCallback, useEffect } from "react";

export default function useKeyCommands() {
  const { setOpen } = useMenuContext();

  const handleMenuToggleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === " ") {
        setOpen((prev) => !prev);
      }
    },
    [setOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      handleMenuToggleKey(e);
    });

    return () => {
      window.removeEventListener("keydown", (e) => {
        handleMenuToggleKey(e);
      });
    };
  }, [handleMenuToggleKey]);
}
