import Spinner from "../../components/Spinner";
import Card from "./Card";
import type { Overview } from "../../types";
import HalfPieChart from "./HalfPieChart";

type UserProgressChartProps = {
  isLoading: boolean;
  chartData: undefined | Overview;
};

const UserProgressChart = ({
  isLoading,
  chartData,
}: UserProgressChartProps) => {
  if (isLoading || !chartData) {
    return (
      <Card>
        <div className="flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      </Card>
    );
  }

  const pieChartData = [
    { name: "Active Users", value: chartData.activeUsers },
    {
      name: "Inactive Users",
      value: chartData.totalUsers - chartData.activeUsers,
    },
  ];

  return (
    <Card>
      <section>
        <h3 className="text-xl font-bold">User conversion rate</h3>
        <HalfPieChart pieChartData={pieChartData} />
      </section>
    </Card>
  );
};

export default UserProgressChart;
