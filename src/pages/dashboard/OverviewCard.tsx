import Card from "./Card";
import Spinner from "../../components/Spinner";

type OverviewCardProps = {
  isLoading: boolean;
  cardData:
    | undefined
    | {
        [title: string]: number;
      };
  cardType?: "highlight" | "default";
};

const OverviewCard = ({
  isLoading,
  cardData,
  cardType = "default",
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
  const paddingClass = cardType === "highlight" ? "p-0" : "p-3";

  return (
    <>
      {cardType === "highlight" ? (
        <Card space={paddingClass}>
          <section>
            <div>{formatTitle}</div>
            <h3>{score}</h3>
          </section>
        </Card>
      ) : (
        <Card>
          <section>
            <div>{formatTitle}</div>
            <h3>{score}</h3>
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
      />
      <OverviewCard isLoading={isLoading} cardData={formatEntriesObject(1)} />
      <OverviewCard isLoading={isLoading} cardData={formatEntriesObject(2)} />
      <OverviewCard isLoading={isLoading} cardData={formatEntriesObject(3)} />
    </>
  );
};

export default OverviewCards;
