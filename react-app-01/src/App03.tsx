import React from "react";
import "./App.css";
import { ChildView } from "./ChildView3";
import { createNID } from "./util";

export interface Person {
  id?: number;
  name: string;
  age: number;
  message?: string;
}

const personList: Array<Person> = [
  {
    name: "Bojan",
    age: 39,
  },
  {
    name: "Kris",
    age: 26,
  },
].map((p) => ({
  ...p,
  id: createNID(),
}));

function App() {
  return (
    <div className="App">
      {personList.map((person) => {
        return <ChildView key={person.id} person={person} />;
      })}

      {/* <div>
        <h2>{personList[0].name}</h2>
        <h3>{personList[0].age}</h3>
      </div>
      <div>
        <h2>{personList[1].name}</h2>
        <h3>{personList[1].age}</h3>
      </div> */}
    </div>
  );
}

export default App;
