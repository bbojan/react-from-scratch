import { FC } from "react";
import { useUrlParams } from "./useUrlParams";

export const Child2Hooks: FC<{}> = () => {
  const search = useUrlParams();
  return <div>{JSON.stringify(search, null, 2)}</div>;
};
