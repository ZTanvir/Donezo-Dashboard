import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { Mail } from "lucide-react";
import avatarImage from "../assets/images/avatarImage.jpg";
import { useCurrentUser } from "../context/userContext/useUserContext";
import { Link } from "react-router";

const Navbar = () => {
  const { user } = useCurrentUser();
  return (
    <div className="rounded-xl bg-gray-100 p-3">
      <div className="flex justify-between">
        <form className="self-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search task"
              id="search"
              className="rounded-xl border border-gray-300 bg-white py-2 pl-8 sm:w-sm"
            />
            <CiSearch
              className="absolute top-1/2 left-4 -translate-1/2 text-gray-800"
              size={20}
            />
          </div>
        </form>
        <div className="flex space-x-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 hover:cursor-pointer">
            <Mail className="text-gray-600" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 hover:cursor-pointer">
            <IoNotificationsOutline className="text-gray-800" size={20} />
          </div>
          {user ? (
            <div className="flex space-x-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-200 p-2">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src={avatarImage}
                  alt="profile avatar"
                />
              </div>
              <div className="hidden flex-col md:flex">
                <span className="font-bold text-gray-800">
                  {user?.email.split("@")[0]}
                </span>
                <span className="text-gray-400">{user?.email}</span>
              </div>
            </div>
          ) : (
            <Link
              className="flex items-center rounded-xl bg-green-900 px-6 py-2 font-bold text-white transition duration-200 hover:bg-green-800"
              to="/"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
