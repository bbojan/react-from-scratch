import {
  createStyles,
  IconButton,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
} from "@material-ui/core";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import React, { FC } from "react";
import { TodoModel } from "../types/todo.model";

const useTodoListItemStyles = makeStyles(() =>
  createStyles({
    root: {},
    paper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "1rem",
    },
    text: { display: "inline-block" },
    deleteBtn: { width: 48 },
  })
);

interface TodoListItemProps {
  todo: TodoModel;
  onDelete: (id: number) => void;
}

export const TodoListItem: FC<TodoListItemProps> = ({ todo, onDelete }) => {
  const classes = useTodoListItemStyles();

  return (
    <ListItem className={classes.root}>
      <Paper className={classes.paper}>
        <div>
          Title: <ListItemText primary={todo.title} className={classes.text} />
        </div>
        {Boolean(todo.description) ? (
          <div>
            Discription:{" "}
            <ListItemText primary={todo.description} className={classes.text} />{" "}
          </div>
        ) : null}
        <IconButton
          className={classes.deleteBtn}
          onClick={() => {
            console.log("delete: ", todo.id);
            onDelete(todo.id);
          }}
        >
          <DeleteOutline />
        </IconButton>
      </Paper>
    </ListItem>
  );
};
