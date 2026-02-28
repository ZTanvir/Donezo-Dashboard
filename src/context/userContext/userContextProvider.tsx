import { useState } from "react";
import { CurrentUserContext } from "./useUserContext";
import type { LoginResponse } from "../../types";

export const CurrentUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<null | LoginResponse>(null);

  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
