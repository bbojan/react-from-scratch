import React, { FC, useState } from "react";

interface TextInputProps {
  title: string;
  // value: string;
}

export const useTextChange = () => {
  const [text, setText] = useState("");

  return {
    value: text,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const txt = e.target.value;
      setText(txt);
    },
  };
};

export const TextInput: FC<TextInputProps> = ({ title }) => {
  const textValue = useTextChange();
  const [counter, setCounter] = useState(0);

  console.log("render occured");
  return (
    <div>
      <h3>{title}</h3>
      <input {...textValue}></input>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};
