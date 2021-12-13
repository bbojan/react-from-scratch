import { Button, createStyles, makeStyles, TextField } from "@material-ui/core";
import React, { FC, useCallback, useContext } from "react";
import { useHistory } from "react-router";
import { TodoContext } from "../store";

const useNewTodoPageContextedStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 400,
      margin: "1rem auto",
      border: "1px blue solid",
      padding: "1rem",
    },
  })
);

interface NewTodoPageContextedProps {}

const NewTodoPageContexted: FC<NewTodoPageContextedProps> = ({}) => {
  const classes = useNewTodoPageContextedStyles();
  const history = useHistory();
  const { onCreate } = useContext(TodoContext);

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const applyOnCreate = useCallback(() => {
    onCreate({ title, description });
    history.push("/");
  }, [onCreate, title, description, history]);

  return (
    <div className={classes.root}>
      <TextField
        margin="dense"
        id="title"
        label="Title"
        type="text"
        fullWidth={true}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        margin="dense"
        id="description"
        label="Description"
        type="text"
        fullWidth={true}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant={"outlined"} onClick={applyOnCreate}>
        Create
      </Button>
    </div>
  );
};
export default NewTodoPageContexted;
