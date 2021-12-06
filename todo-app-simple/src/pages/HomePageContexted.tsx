import { createStyles, List, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { Search } from "../components/Search";
import { TodoListItem } from "../components/TodoListItem";
import { TodoContext, useTodoContext } from "../store";

const useHomePageContextedStyles = makeStyles(() =>
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

interface HomePageContextedProps {}

// const _todoList: Array<TodoModel> = [
//   { id: 0, title: "Todo 1", done: false, description: "Todo 1 description" },
//   { id: 1, title: "Todo 2", done: false, description: "Todo 2 description" },
//   { id: 2, title: "Todo 3", done: true, description: "Todo 3 description" },
//   { id: 3, title: "Todo 4", done: false, description: "Todo 4 description" },
// ];

const HomePageContexted: FC<HomePageContextedProps> = () => {
  const classes = useHomePageContextedStyles();

  const { todoList, onDelete } = useTodoContext();

  const isEmpty = !todoList.length;
  return (
    <div className={clsx(classes.wrapper)}>
      <Link to="/new">Add New Todo </Link>
      <Search />

      <div className={clsx(classes.root, { [classes.noItems]: isEmpty })}>
        <>
          {isEmpty ? (
            <h4>No Todo Items, Plase create some</h4>
          ) : (
            <List className={classes.list}>
              {todoList.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} onDelete={onDelete} />
              ))}
            </List>
          )}
        </>
      </div>
    </div>
  );
};

export default HomePageContexted;
