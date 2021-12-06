import { createStyles, makeStyles, TextField } from "@material-ui/core";
import React, { FC, useCallback } from "react";
import { useTodoContext } from "../store";

const useSearchStyles = makeStyles(() =>
  createStyles({
    root: {},
  })
);

interface SearchProps {}

export const Search: FC<SearchProps> = ({}) => {
  const classes = useSearchStyles();
  const ctx = useTodoContext();

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      ctx.onSearchChange(event.target.value);
    },
    [ctx]
  );

  return (
    <div>
      <TextField value={ctx.search} onChange={handleSearchChange} />
    </div>
  );
};
