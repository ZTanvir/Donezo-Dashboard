import { FiTarget } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";

import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="h-full">
      <div className="h-full rounded-xl bg-gray-100 px-5 py-3">
        <div className="mb-6 flex items-center justify-center space-x-3 md:mb-8 md:justify-start">
          <FiTarget className="text-green-950" size={40} />
          <span className="text-2xl font-bold text-gray-900">Donezo</span>
        </div>
        <div>
          <span>Menu</span>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex font-bold transition-all duration-200 hover:bg-gray-50 ${isActive ? "text-green-800" : ""}`
            }
          >
            <span className="mr-4 self-center">
              <MdOutlineDashboard size={30} />
            </span>
            <span className="self-center text-gray-800">Dashboard</span>
          </NavLink>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Sidebar;
