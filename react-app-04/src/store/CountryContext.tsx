import React, { FC, useState } from "react";

export const CountryContext = React.createContext<{
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}>({
  country: "",
  setCountry: () => {},
});

export const CountryContextProvider: FC<{}> = ({ children }) => {
  const [country, setCountry] = useState("MK");

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
