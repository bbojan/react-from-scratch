import {
  createStyles,
  IconButton,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
} from "@material-ui/core";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
// import EditOutline from "@material-ui/icons/EditOutline";
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
  renderTitle?: () => JSX.Element;
  onDelete: (id: number) => void;
}

export const TodoListItem: FC<TodoListItemProps> = ({
  todo,
  onDelete,
  renderTitle,
}) => {
  const classes = useTodoListItemStyles();

  return (
    <ListItem className={classes.root}>
      <Paper className={classes.paper}>
        {!!renderTitle ? (
          renderTitle()
        ) : (
          <div>
            Title:{" "}
            <ListItemText primary={todo.title} className={classes.text} />
          </div>
        )}
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
        {/* <IconButton
          className={classes.editBtn}
          onClick={() => {
            console.log("edit: ", todo.id);
            onEdit(todo.id);
          }}
        >
          <EditOutline />
        </IconButton> */}
      </Paper>
    </ListItem>
  );
};
