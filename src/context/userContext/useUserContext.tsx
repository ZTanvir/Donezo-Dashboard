import { useContext, createContext } from "react";
import type { LoginResponse } from "../../types";

interface CurrentUserContextType {
  user: null | LoginResponse;
  setUser: React.Dispatch<React.SetStateAction<null | LoginResponse>>;
}

export const CurrentUserContext = createContext<CurrentUserContextType | null>(
  null,
);

export const useUser = () => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
