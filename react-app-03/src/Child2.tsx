import { FC } from "react";
import { withUrlParams } from "./withUrlParams";

type Child2Props = {};

const Child2: FC<Child2Props> = (props) => {
  return <div>{JSON.stringify((props as any)?.search, null, 2)}</div>;
};

export const Child2Extra = withUrlParams(Child2);
