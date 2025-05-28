import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthContextProvider } from "./contexts/Auth/AuthContextProvider.tsx";
import { EditingContextProvider } from "./contexts/Editing/EditingContextProvider.tsx";

createRoot(document.getElementById("root") as Element).render(
  <StrictMode>
    <AuthContextProvider>
      <EditingContextProvider>
        <App />
      </EditingContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
