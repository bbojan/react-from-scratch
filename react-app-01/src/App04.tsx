import React from "react";
import "./App.css";
import { ChildView } from "./ChildView4";
import { createNID } from "./util";

export interface Person {
  id?: number;
  name: string;
  age: number;
  message?: string;
}

const personList = [
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
})) as Required<Person>[];

function App() {
  return (
    <div className="App">
      {personList.map((person) => {
        return (
          <ChildView
            key={person.id}
            person={person}
            onNotifyParent={(id) => {
              console.log(`person with id = ${id}`);
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
