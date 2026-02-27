import { Outlet } from "react-router";
import { CurrentUserProvider } from "../context/userContext/userContextProvider";

const UserContextLayout = () => {
  return (
    <CurrentUserProvider>
      <Outlet />
    </CurrentUserProvider>
  );
};
export default UserContextLayout;
