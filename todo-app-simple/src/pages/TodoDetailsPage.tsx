import { createStyles, makeStyles } from "@material-ui/core";

import React, { FC } from "react";

const useTodoDetailsPageStyles = makeStyles(() =>
  createStyles({
    root: {},
  })
);

interface TodoDetailsPageProps {}

const TodoDetailsPage: FC<TodoDetailsPageProps> = ({}) => {
  const classes = useTodoDetailsPageStyles();

  return <div>TodoDetailsPage</div>;
};
export default TodoDetailsPage;
