import React from "react";
import "./App.css";
import { ChildView } from "./ChildView2";

function App() {
  let counter = 0;
  return (
    <div className="App" key="12312" onClick={() => {}}>
      <ChildView name="first" message={"msg 1"} age={24} />
      <ChildView name="second" message={"msg 2"} />
    </div>
  );
}

export default App;
