import { Outlet } from "react-router";
import { useCurrentUser } from "../context/userContext/useUserContext";

const ProtectedUserRoute = () => {
  const { user } = useCurrentUser();
  if (!user) {
    return <div>Don't have permission</div>;
  }
  return <Outlet />;
};
export default ProtectedUserRoute;
