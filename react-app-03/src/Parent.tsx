import { FC, useCallback, useMemo, useState } from "react";
import Child from "./Child";

export const Parent: FC<{}> = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const handleIncrement1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleIncrement2 = useCallback(() => {
    setCount2((c) => c + 1);
    setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
  }, [numbers]);

  // const total = numbers.reduce((acc, curr) => acc + curr, 0);

  const total = useMemo(() => {
    console.log("calculating total");
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }, [numbers]);

  return (
    <div>
      <Child id={0} handleIncrement={handleIncrement1} value={count1} />
      <Child id={1} handleIncrement={handleIncrement2} value={count2} />

      <span>{total}</span>
    </div>
  );
};
