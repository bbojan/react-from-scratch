import React, { FC, useState, useEffect, useRef } from "react";
import { TextInput } from "./TextInput.4";

export const Form: FC<{}> = () => {
  const [firstName, setFirstName] = useState("");

  const [timerIDState, setTimerIDState] = useState(0);
  const [counterState, setCounter] = useState(0);

  const timerID = useRef(0);
  const counterRef = useRef(0);

  useEffect(() => {
    console.log("every render");
  });

  // useEffect(() => {
  //   const timerID = window.setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //     if (counterState > 10) {
  //       clearInterval(timerIDState);
  //     }
  //     // console.log();
  //   }, 500);

  //   setTimerIDState(timerID);

  //   return () => {
  //     clearInterval(timerIDState);
  //   };
  // }, []);

  useEffect(() => {
    timerID.current = window.setInterval(() => {
      document.title = `${counterRef.current++}`;
      if (counterRef.current > 10) {
        clearInterval(timerID.current);
      }
      // console.log();
    }, 500);

    return () => {
      clearInterval(timerID.current);
    };
  }, []);

  return (
    <div>
      <h1>Form</h1>

      <p>Counter State: {counterState}</p>
      <TextInput
        title={"First name"}
        value={firstName}
        onValueChange={(value: string) => setFirstName(value)}
      />

      <button
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Check
      </button>
    </div>
  );
};
