type CardProps = {
  children: React.ReactElement;
  cssClass?: string;
};
const Card = ({ children, cssClass }: CardProps) => {
  return (
    <div className={`rounded-xl bg-white p-3 ${cssClass}`}>{children}</div>
  );
};
export default Card;
