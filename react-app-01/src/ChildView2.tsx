import { FC } from "react";

export interface ChildProps {
  name: string;
  message: string;
  age?: number;
}

export const ChildView: FC<ChildProps> = ({ name, message, age }) => {
  const renderAge = Boolean(age);

  const ageElement = renderAge && <p>{age}</p>;

  return (
    <p>
      <h4>Im a child comonent</h4>
      <h4>{name}</h4>
      <span>{message}</span>
      {/* {renderAge && <p>{age}</p>} */}
      {ageElement}
      {/* <br />
      {true}
      <br />
      {false}
      <br /> 
      {null}
      <br />
      {0}
      <br />
      {1} */}
    </p>
  );
};
