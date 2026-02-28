import { BarChart, XAxis, Tooltip, Bar, BarStack } from "recharts";

import type { TooltipIndex } from "recharts";

type chartItem = {
  date: string;
  views: number[];
  clicks: number[];
  conversions: number[];
};

const RangedStackedBarChart = ({
  isAnimationActive = true,
  defaultIndex,
  chartData,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
  chartData?: chartItem[];
}) => (
  <BarChart
    style={{
      width: "100%",
      maxWidth: "700px",
      maxHeight: "50vh",
      aspectRatio: 1.618,
    }}
    responsive
    data={chartData}
    id="recharts-ranged-stacked-bar-chart"
    margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    }}
  >
    <XAxis dataKey="date[0]" />
    <Tooltip defaultIndex={defaultIndex} />
    <BarStack radius={25}>
      <Bar
        dataKey="views"
        maxBarSize={50}
        fill="#8884d8"
        isAnimationActive={isAnimationActive}
        activeBar={{ fill: "#5550bd" }}
      />
      <Bar
        dataKey="clicks"
        maxBarSize={50}
        fill="#82ca9d"
        isAnimationActive={isAnimationActive}
        activeBar={{ fill: "#55bd50" }}
      />
      <Bar
        dataKey="conversions"
        maxBarSize={50}
        fill="#ffc658"
        isAnimationActive={isAnimationActive}
        activeBar={{ fill: "#ffc658" }}
      />
    </BarStack>
  </BarChart>
);

export default RangedStackedBarChart;
