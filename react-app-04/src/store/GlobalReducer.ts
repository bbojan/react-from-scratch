import { GlobalState, User } from "./GlobalStore";

export type GlobalActionNames = "addUser" | "removeUser";

export type GlobalActionType = {
  type: GlobalActionNames;
  payload?: any;
};

export const GlobalReducer = (
  state: GlobalState,
  action: GlobalActionType
): GlobalState => {
  switch (action.type) {
    case "addUser":
      return {
        users: [...state.users, action.payload as User],
      };
    case "removeUser":
      return {
        users: state.users.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};
