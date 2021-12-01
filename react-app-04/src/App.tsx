import React from "react";
import Parent from "./Parent";
import { CountryContextProvider } from "./store/CountryContext";
import { GlobalReducer } from "./store/GlobalReducer";
import { GlobalStoreContext, InitialGlobalState } from "./store/GlobalStore";

function App() {
  const [state, dispatch] = React.useReducer(GlobalReducer, InitialGlobalState);
  return (
    <div className="App">
      <CountryContextProvider>
        <GlobalStoreContext.Provider value={[state, dispatch]}>
          <Parent />
        </GlobalStoreContext.Provider>
      </CountryContextProvider>
    </div>
  );
}

export default App;
