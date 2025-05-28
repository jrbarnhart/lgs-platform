import { use } from "react";
import { EditingContext } from "./EditingContext";

export const useEditingContext = () => {
  const context = use(EditingContext);
  if (!context) {
    throw new Error(
      "useEditingContext must be used within a EditingContextProvider"
    );
  }
  return context;
};
