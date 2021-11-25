import React, { FC, useEffect, useState } from "react";
import { Chlid } from "./Chlid";
import { TextInput } from "./TextInput.3";

export const Form: FC<{}> = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("every render");
    // not used at all :)

    return () => {
      console.log("every render cleanup");
    };
  });

  useEffect(() => {
    console.log("on mounting");
    // usually used for fetching data
  }, []);

  useEffect(() => {
    console.log("on mounting + every time firstName changed");
    // usually used for syncing data
  }, [firstName]);

  useEffect(() => {
    window.onblur = () => {
      console.log("unfocused");
    };
    // cleanup
    return () => {
      window.onblur = null;
    };
  }, []);

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
      {show ? <Chlid /> : <p>Nothing to show here</p>}

      <button
        onClick={(e) => {
          e.preventDefault();
          console.log("checking", { firstName, lastName });
        }}
      >
        Check
      </button>

      <button
        onClick={() => {
          setShow((prevShow) => !prevShow);
        }}
      >
        Verify
      </button>
    </div>
  );
};
