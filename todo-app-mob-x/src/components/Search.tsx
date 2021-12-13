import {
  alpha,
  createStyles,
  InputBase,
  makeStyles,
  Theme
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { observer } from "mobx-react-lite";
import React, { FC, useCallback } from "react";
import { todoStore } from "../todoStore";

const useSearchStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);

interface SearchProps {}

export const Search: FC<SearchProps> = observer(({}) => {
  const classes = useSearchStyles();
  //const ctx = useTodoContext();

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const txt = event.target.value;
      todoStore.setSearch(txt);
      // todoStore .onSearchChange(event.target.value);
    },
    []
  );

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        value={todoStore.search}
        onChange={handleSearchChange}
      />
    </div>
  );
});
