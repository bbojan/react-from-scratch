import React from "react";
import "./App.css";
import { ParentView } from "./ParentView";

function App() {
  let counter = 0;
  return (
    <div className="App" key="12312" onClick={() => {}}>
      <ParentView>
        <h3>Different children 1</h3>
        <h3>Different children 2</h3>
      </ParentView>
      <ParentView>
        <h3>Different children 1</h3>
        <h3>Different children 2</h3>
      </ParentView>
    </div>
  );
}

export default App;
