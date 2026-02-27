import { Outlet } from "react-router";
import { useCurrentUser } from "../context/userContext/useUserContext";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router";
import { CiLock } from "react-icons/ci";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ProtectedUserRoute = () => {
  const { user } = useCurrentUser();
  if (!user) {
    return (
      <div className="h-screen bg-gray-400 backdrop-blur-xl">
        <div className="fixed inset-0 mx-2 my-auto h-max w-auto rounded-xl bg-white p-8 sm:m-auto sm:w-max">
          <div>
            <div className="grid grid-cols-[auto_1fr]">
              <div className="relative col-start-1 mr-2 h-5 w-5 rounded-full bg-green-200 p-4">
                <CiLock className="absolute top-1/2 z-4 -translate-1/2 text-green-900" />
              </div>
              <h3 className="col-start-2 mb-2 text-xl font-bold">
                Protected dashboard
              </h3>
              <p className="col-start-2 mb-3 max-w-sm text-sm text-gray-500">
                Please sign in with your account to access this dashboard. Only
                authenticated users can view the data.
              </p>
            </div>
          </div>
          <LoginForm />
          <Link
            className="mt-4 block rounded-xl bg-gray-300 px-4 py-3 text-center text-gray-900 transition duration-200 hover:bg-gray-200"
            to="/"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-3">
        <div className="col-start-1 row-span-full">
          <Sidebar />
        </div>
        <div className="col-start-2">
          <Navbar />
        </div>
        <div className="col-start-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default ProtectedUserRoute;
