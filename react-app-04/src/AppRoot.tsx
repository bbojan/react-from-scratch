import { createTheme, ThemeProvider } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";
import React from "react";
import ParentThemed from "./ParentThemed";
import { CountryContextProvider } from "./store/CountryContext";
import { GlobalReducer } from "./store/GlobalReducer";
import { GlobalStoreContext, InitialGlobalState } from "./store/GlobalStore";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const AppRoot = () => {
  const [state, dispatch] = React.useReducer(GlobalReducer, InitialGlobalState);
  return (
    <div className="App">
      <CountryContextProvider>
        <GlobalStoreContext.Provider value={[state, dispatch]}>
          <ThemeProvider theme={theme}>
            <ParentThemed />
          </ThemeProvider>
        </GlobalStoreContext.Provider>
      </CountryContextProvider>
    </div>
  );
};

export default AppRoot;
