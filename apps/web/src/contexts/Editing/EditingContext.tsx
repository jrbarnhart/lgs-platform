import { createContext, type SetStateAction } from "react";

export type EditingStateType = {
  state: boolean;
  section?: string;
};

export type EditingContextType = {
  editing: EditingStateType;
  setEditing: React.Dispatch<SetStateAction<EditingStateType>>;
};

export const EditingContext = createContext<EditingContextType | null>(null);
