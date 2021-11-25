import React, { FC, useState } from "react";
import { TextInput } from "./TextInput.2";

export const Form: FC<{}> = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   console.log("submiting", { firstName, lastName });
  // }

  // return (
  //   <div>
  //     <h1>Form</h1>
  //     <form onSubmit={onSubmit}>
  //       <TextInput
  //         title={"First name"}
  //         value={firstName}
  //         onValueChange={(value: string) => setFirstName(value)}
  //       />
  //       <TextInput
  //         title={"Last name"}
  //         value={lastName}
  //         onValueChange={(value: string) => setLastName(value)}
  //       />

  //       <button
  //         type="submit"
  //         // onClick={(e) => {
  //         //   e.preventDefault();
  //         // }}
  //       >
  //         Submit
  //       </button>
  //     </form>
  //   </div>
  // );
  return (
    <div>
      <h1>Form</h1>
      <TextInput
        title={"First name"}
        value={firstName}
        onValueChange={(value: string) => setFirstName(value)}
      />
      <TextInput
        title={"Last name"}
        value={lastName}
        onValueChange={(value: string) => setLastName(value)}
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          console.log("checking", { firstName, lastName });
        }}
      >
        Check
      </button>
    </div>
  );
};
