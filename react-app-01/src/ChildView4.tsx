import { FC } from "react";
import { Person } from "./App03";

interface Props {
  person: Required<Person>;
  onNotifyParent?: (id: number) => void;
}

export const ChildView: FC<Props> = ({ person, onNotifyParent }) => {
  return (
    <div>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <button
        onClick={() => {
          onNotifyParent?.(person.id);

          //onNotifyParent && onNotifyParent()

          // if (onNotifyParent) {
          //   onNotifyParent();
          // }
        }}
      >
        Click me!!
      </button>
    </div>
  );
};
