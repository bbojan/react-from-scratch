import { FC } from "react";
import { Person } from "./App03";

interface Props {
  person: Person;
}

export const ChildView: FC<Props> = ({ person }) => {
  return (
    <div>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
    </div>
  );
};
