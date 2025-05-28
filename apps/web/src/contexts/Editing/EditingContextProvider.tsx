import { useMemo, useState } from "react";
import { EditingContext, type EditingStateType } from "./EditingContext";

export const EditingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [editing, setEditing] = useState<EditingStateType>({ state: false });

  const contextValue = useMemo(() => {
    return { editing, setEditing };
  }, [editing]);

  return <EditingContext value={contextValue}>{children}</EditingContext>;
};
