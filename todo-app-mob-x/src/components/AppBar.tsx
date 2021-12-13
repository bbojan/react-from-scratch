import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react-lite";
import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { Search } from "./Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
  },
  title: {
    // flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  resetLink: {
    color: "inherit",
    textDecoration: "none",
  },
  addNew: {
    color: "#fff",
    borderColor: "#fff",
  },
}));

function SearchAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const showSearch = !!useRouteMatch({ exact: true, path: "/" });
  const showAdd = !useRouteMatch({ exact: true, path: "/new" });

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar classes={{ root: classes.toolbar }}>
          <Typography className={classes.title} variant="h6" noWrap>
            <NavLink to={"/"} className={classes.resetLink}>
              Todo App
            </NavLink>
          </Typography>
          {showSearch && <Search />}
          {showAdd && (
            <Button
              className={classes.addNew}
              variant="outlined"
              onClick={() => {
                history.push("/new");
              }}
            >
              Add New Todo{" "}
            </Button>
          )}
          {/* {showAdd && <Link to="/new">Add New Todo </Link>} */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default observer(SearchAppBar);