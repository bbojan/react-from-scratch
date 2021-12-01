import {
  Box,
  Button,
  createStyles,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { FC, useCallback, useState } from "react";
import { Child } from "./Child";
import { useStoreFromContext } from "./store/ContextHook";
import { User } from "./store/GlobalStore";

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      maxWidth: 400,
    },
  })
);

interface ParentProps {}

const ParentThemed: FC<ParentProps> = () => {
  const [name, setName] = useState("");
  const classes = useStyle();
  const { globalState, dispatch } = useStoreFromContext();
  const users = globalState.users;

  const handleAddUser = useCallback(
    (name: string) => {
      const user: User = { id: Date.now(), name };
      dispatch({ type: "addUser", payload: user });
    },
    [dispatch]
  );

  const handleRemoveUser = useCallback(
    (id: number) => {
      dispatch({ type: "removeUser", payload: id });
    },
    [dispatch]
  );

  return (
    <div>
      <Box
        className={classes.root}

        // style={{ maxWidth: "50%", display: "flex", flexDirection: "column" }}
      >
        <TextField
          // classes={{ root: "themed" }}
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button
          color="secondary"
          variant="contained"
          onClick={() => {
            handleAddUser(name);
            // clear the input
            setName("");
          }}
        >
          Add User
        </Button>
      </Box>
      {users.map((user) => (
        <Child key={user.id} user={user} handleDelete={handleRemoveUser} />
      ))}
    </div>
  );
};

export default ParentThemed;
