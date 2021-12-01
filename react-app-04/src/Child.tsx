import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import React, { FC, useContext } from "react";
import { CountryContext } from "./store/CountryContext";
import { User } from "./store/GlobalStore";

export const Child: FC<{ user: User; handleDelete: (id: number) => void }> = ({
  user,
  handleDelete,
}) => {
  const { country, setCountry } = useContext(CountryContext);
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <span>{country}</span>
      <button
        onClick={() => {
          setCountry("BG");
        }}
      >
        Change Country
      </button>
      <Button
        onClick={() => {
          handleDelete(user.id);
        }}
      >
        <Icon>delete</Icon>
      </Button>
    </div>
  );
};
