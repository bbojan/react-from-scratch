import { createStyles, List, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { TodoListItem } from "../components/TodoListItem";
import { todoStore } from "../todoStore";
import { TodoModel } from "../types/todo.model";

const useHomePageStyles = makeStyles(() =>
  createStyles({
    wrapper: {},
    root: {
      maxWidth: 400,
      margin: "0 auto",
      border: "1px blue solid",
    },
    noItems: { border: "none" },
    list: {},
  })
);

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const todoList = todoStore.filteredTodos;
  const classes = useHomePageStyles();

  const isEmpty = !todoList.length;
  return (
    <div className={clsx(classes.wrapper)}>
      <div className={clsx(classes.root, { [classes.noItems]: isEmpty })}>
        <>
          {isEmpty ? (
            <h4>No Todo Items, Plase create some</h4>
          ) : (
            <List className={classes.list}>
              {todoList.map((todo) => (
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  onDelete={todoStore.onDelete}
                  renderTitle={() => <div>{todo.title}</div>}
                />
              ))}
            </List>
          )}
        </>
      </div>
    </div>
  );
};

export default observer(HomePage);
