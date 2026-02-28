import Spinner from "../../components/Spinner";
import type { Analytic } from "../../types";
import Card from "./Card";
import RangedStackedBarChart from "./RangedStackedBarChart";

type ProjectsAnalyticsCardProps = {
  isLoading: boolean;
  analyticsData: undefined | Analytic[];
};

const ProjectsAnalyticsCard = ({
  isLoading,
  analyticsData,
}: ProjectsAnalyticsCardProps) => {
  if (isLoading || !analyticsData) {
    return (
      <Card>
        <div className="flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      </Card>
    );
  }
  function getDayName(dateString: string, locale = "en-US") {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    return date.toLocaleString(locale, options);
  }
  const formatAnalytics = analyticsData.map((item) => ({
    date: getDayName(String(item.date)),
    views: [0, item.views],
    clicks: [0, item.clicks],
    conversions: [0, item.conversions],
  }));

  return (
    <>
      <Card>
        <section>
          <h3 className="text-xl">User action analytics</h3>
          <RangedStackedBarChart chartData={formatAnalytics} />
        </section>
      </Card>
    </>
  );
};
export default ProjectsAnalyticsCard;
