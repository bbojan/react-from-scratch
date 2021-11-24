import { FC } from "react";
import { ChildView } from "./ChildView";

export const ParentView: FC<{}> = ({ children }) => {
  console.log(children);
  return (
    <>
      <div>
        <h1>HEADER</h1>
        <ChildView />
        <span>___________________________</span>
        {children}
      </div>
      {/* <div>
        <h1>HEADER</h1>
        <ChildView />
        <span>___________________________</span>
        {children}
      </div> */}
    </>
  );
};
