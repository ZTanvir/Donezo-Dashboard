type CardProps = {
  children: React.ReactElement;
};
const Card = ({ children }: CardProps) => {
  return <div className="rounded-xl bg-white p-3">{children}</div>;
};
export default Card;
