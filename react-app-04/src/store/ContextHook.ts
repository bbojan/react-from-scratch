import React from "react";
import { GlobalStoreContext } from "./GlobalStore";

export function useStoreFromContext() {
  const [globalState, dispatch] = React.useContext(GlobalStoreContext);
  return { globalState, dispatch };
}
