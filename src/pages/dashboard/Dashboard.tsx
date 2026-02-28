import { CgMathPlus } from "react-icons/cg";
import { fetchDashboard } from "../../services/api";
import useSWR from "swr";
import OverviewCards from "./OverviewCard";

const Dashboard = () => {
  const { data, isLoading, error } = useSWR("/api/dashboard", fetchDashboard);
  return (
    <div className="p-4">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-400">
            Plan,prioritize,and accomplish your tasks with ease.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-3xl border bg-linear-to-r from-green-900 to-green-700 px-4 py-3 text-white hover:cursor-pointer">
            <CgMathPlus />
            <span>Add Project</span>
          </button>
          <button className="rounded-3xl border border-green-900 px-4 py-3 text-green-900 hover:cursor-pointer">
            Import Data
          </button>
        </div>
      </div>
      <div>
        <OverviewCards isLoading={isLoading} overviewData={data?.overview} />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Dashboard;
