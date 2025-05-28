import { createContext, type SetStateAction } from "react";
import type { SectionName } from "../../lib/types";

export type EditingStateType = {
  state: boolean;
  section?: SectionName;
};

export type EditingContextType = {
  editing: EditingStateType;
  setEditing: React.Dispatch<SetStateAction<EditingStateType>>;
};

export const EditingContext = createContext<EditingContextType | null>(null);
