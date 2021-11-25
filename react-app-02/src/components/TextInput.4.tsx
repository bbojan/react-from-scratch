import React, { FC } from "react";

interface TextInputProps {
  title: string;
  value: string;
  onValueChange: (value: string) => void;
}

export const TextInput: FC<TextInputProps> = ({
  title,
  value,
  onValueChange,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <input
        value={value}
        onChange={(e) => {
          const text = e.target.value;
          onValueChange(text);
        }}
      ></input>
    </div>
  );
};
