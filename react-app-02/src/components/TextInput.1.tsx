import React, { FC, useState } from "react";

interface TextInputProps {
  title: string;
  // value: string;
}

export const TextInput: FC<TextInputProps> = ({ title }) => {
  const [value, setValue] = useState("");
  const [counter, setCounter] = useState(0);

  console.log("render occured");
  return (
    <div>
      <h3>{title}</h3>
      <input
        value={value}
        onChange={(e) => {
          const text = e.target.value;

          setValue(text);
          console.log(text);
        }}
      ></input>
      <p>{counter}</p>
      <button
        onClick={() => {
          // batched setting of state
          // counter = 0
          // setCounter(counter + 1);
          // counter = 0 + 1
          // setCounter(counter + 1);
          // counter = 0 + 1
          // ___________________________________
          // counter = 0
          setCounter((prevCounter) => prevCounter + 1);
          // counter = 0 + 1
          setCounter((prevCounter) => prevCounter + 1);
          // counter = 1 + 1
        }}
      >
        Increment
      </button>
    </div>
  );
};
