import Card from "./Card";
import Spinner from "../../components/Spinner";
import { IoIosArrowRoundUp } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";

type OverviewCardProps = {
  isLoading: boolean;
  cardData:
    | undefined
    | {
        [title: string]: number;
      };
  cardType?: "highlight" | "default";
  changeRate: string;
};

const OverviewCard = ({
  isLoading,
  cardData,
  cardType = "default",
  changeRate,
}: OverviewCardProps) => {
  if (isLoading || !cardData) {
    return (
      <Card>
        <div className="flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      </Card>
    );
  }
  const titleKey = Object.keys(cardData)[0];
  const score = cardData[titleKey];
  const formatTitle = titleKey
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      {cardType === "highlight" ? (
        <div className="rounded-xl bg-radial-[circle_at_10%_45%] from-yellow-200/40 to-green-800 to-5% p-3">
          <section className="text-white">
            <div className="mb-2 flex items-center justify-between gap-4">
              <span className="text-xl">{formatTitle}</span>
              <span>
                <IoIosArrowRoundUp
                  size={35}
                  className="rotate-45 rounded-full bg-white text-gray-900 transition duration-200 hover:cursor-pointer hover:bg-gray-900 hover:text-white"
                />
              </span>
            </div>
            <h3 className="mb-2 text-4xl font-bold">{score}</h3>
            <div className="text-sm text-yellow-200">
              <span className="mr-2 inline-flex items-center rounded-lg border border-yellow-200 px-1">
                {changeRate} <MdArrowDropUp />
              </span>
              <span className="">Increase from last month</span>
            </div>
          </section>
        </div>
      ) : (
        <Card>
          <section className="text-gray-800">
            <div className="mb-2 flex items-center justify-between gap-4">
              <span className="text-xl">{formatTitle}</span>
              <span>
                <IoIosArrowRoundUp
                  size={35}
                  className="rotate-45 rounded-full border border-gray-900 bg-white text-gray-800 transition duration-200 hover:cursor-pointer hover:border-white hover:bg-gray-800 hover:text-white"
                />
              </span>
            </div>
            <h3 className="mb-2 text-4xl font-bold">{score}</h3>
            <div className="text-sm text-green-800">
              <span className="mr-2 inline-flex items-center rounded-lg border border-green-800 px-1">
                {changeRate} <MdArrowDropUp />
              </span>
              <span className="">Increase from last month</span>
            </div>
          </section>
        </Card>
      )}
    </>
  );
};

type OverviewCardsProps = {
  isLoading: boolean;
  overviewData: undefined | Record<string, number>;
};
const OverviewCards = ({ isLoading, overviewData }: OverviewCardsProps) => {
  const entries = overviewData ? Object.entries(overviewData) : [];

  const formatEntriesObject = (index: number) => {
    const entry = entries[index];
    if (!entry) return undefined;
    return { [entry[0]]: entry[1] };
  };

  return (
    <>
      <OverviewCard
        isLoading={isLoading}
        cardData={formatEntriesObject(0)}
        cardType="highlight"
        changeRate={"125"}
      />
      <OverviewCard
        isLoading={isLoading}
        cardData={formatEntriesObject(1)}
        changeRate={"37"}
      />
      <OverviewCard
        isLoading={isLoading}
        cardData={formatEntriesObject(2)}
        changeRate={"1400$"}
      />
      <OverviewCard
        isLoading={isLoading}
        cardData={formatEntriesObject(3)}
        changeRate={"25%"}
      />
    </>
  );
};

export default OverviewCards;
