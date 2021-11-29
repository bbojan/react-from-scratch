import { FC, memo } from "react";

const Child: FC<{
  id: number;
  value: number;
  handleIncrement: () => void;
}> = ({ value, id, handleIncrement }) => {
  console.log(`${id}: render`);
  return (
    <div>
      <h3>Child {id}</h3>
      <span>{value}</span>
      <button onClick={handleIncrement}>Click me</button>
    </div>
  );
};

export default memo(Child);

//, (prevProps, nextProps) => {
//  return false;
//}
