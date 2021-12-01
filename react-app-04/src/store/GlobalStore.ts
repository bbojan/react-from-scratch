import React from "react";
import { GlobalActionType } from "./GlobalReducer";

export interface User {
  name: string;
  id: number;
}

export interface GlobalState {
  users: User[];
}

export const InitialGlobalState: GlobalState = {
  users: [],
};

export type GlobalUseReducer = [GlobalState, React.Dispatch<GlobalActionType>];

export const GlobalStoreContext = React.createContext([
  InitialGlobalState,
  () => undefined,
] as GlobalUseReducer);
