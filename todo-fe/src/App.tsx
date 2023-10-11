import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoTable } from "./container/TodoTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoTable />
      </header>
    </div>
  );
}

export default App;
