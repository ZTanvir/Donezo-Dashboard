type CardProps = {
  space?: string;
  children: React.ReactElement;
};
const Card = ({ space = "p-3", children }: CardProps) => {
  return <div className={`rounded-xl bg-white ${space}`}>{children}</div>;
};
export default Card;
