import { createContext, type SetStateAction } from "react";

type EditableSectionNames = "hours" | "news" | "specials";

export type EditingStateType = {
  state: boolean;
  section?: EditableSectionNames;
};

export type EditingContextType = {
  editing: EditingStateType;
  setEditing: React.Dispatch<SetStateAction<EditingStateType>>;
};

export const EditingContext = createContext<EditingContextType | null>(null);
