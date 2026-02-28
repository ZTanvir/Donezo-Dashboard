import { CgMathPlus } from "react-icons/cg";
import { FiVideo } from "react-icons/fi";
import { fetchDashboard } from "../../services/api";
import useSWR from "swr";
import OverviewCards from "./OverviewCard";
import Card from "./Card";
import Stopwatch from "./Stopwatch";
import ProductsCard from "./ProductsCard";
import TeamCard from "./TeamCard";
import ProjectsAnalyticsCard from "./ProjectsAnalyticsCard";
import UserProgressChart from "./UserProgressChart";

const Dashboard = () => {
  const { data, isLoading, error, mutate } = useSWR(
    "/api/dashboard",
    fetchDashboard,
  );
  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <p>{error?.message}</p>
        <button
          onClick={() => mutate()}
          className="flex items-center gap-2 rounded-3xl border bg-linear-to-r from-green-900 to-green-700 px-4 py-3 text-white hover:cursor-pointer"
        >
          <span>Retry again</span>
        </button>
      </div>
    );
  }
  return (
    <div className="p-4">
      <div className="mb-4 flex flex-col items-start justify-between gap-4 md:flex-row">
        <div>
          <h1 className="text-5xl font-bold">Dashboard</h1>
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
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <OverviewCards isLoading={isLoading} overviewData={data?.overview} />

          <ProjectsAnalyticsCard
            isLoading={isLoading}
            analyticsData={data?.analytics}
          />
          <Card>
            <section>
              <h3 className="mb-2 text-2xl font-bold">Reminders</h3>
              <p className="mb-1/2 text-3xl text-green-900">
                Meeting with Arc Company
              </p>
              <p className="mb-2 text-gray-500">Time:02.00 - 04.00pm</p>
              <button className="flex items-center justify-center gap-2 rounded-3xl border bg-linear-to-r from-green-900 to-green-700 px-4 py-2 text-white hover:cursor-pointer">
                <FiVideo />
                <span>Add Project</span>
              </button>
            </section>
          </Card>
          <ProductsCard isLoading={isLoading} productsData={data?.products} />

          <TeamCard isLoading={isLoading} teamsData={data?.users} />
          <UserProgressChart isLoading={isLoading} chartData={data?.overview} />
          <Stopwatch />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
