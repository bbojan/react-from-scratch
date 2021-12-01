import React, { FC, useCallback, useState } from "react";
import { Child } from "./Child";
import { useStoreFromContext } from "./store/ContextHook";
import { User } from "./store/GlobalStore";

interface ParentProps {}

const Parent: FC<ParentProps> = () => {
  const [name, setName] = useState("");

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
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => {
            handleAddUser(name);
            // clear the input
            setName("");
          }}
        >
          Add User
        </button>
      </div>
      {users.map((user) => (
        <Child key={user.id} user={user} handleDelete={handleRemoveUser} />
      ))}
    </div>
  );
};

export default Parent;
