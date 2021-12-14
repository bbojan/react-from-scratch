import { Button, createStyles, makeStyles, TextField } from "@material-ui/core";
import React, { FC, useCallback } from "react";
import { useHistory } from "react-router";
import { TodoCreateModel } from "../types/todo.model";

const useNewTodoPageStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 400,
      margin: "0 auto",
      border: "1px blue solid",
      padding: "1rem",
    },
  })
);

interface NewTodoPageProps {
  onCreate: (m: TodoCreateModel) => void;
}

const NewTodoPage: FC<NewTodoPageProps> = ({ onCreate }) => {
  const classes = useNewTodoPageStyles();
  const history = useHistory();

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
export default NewTodoPage;
