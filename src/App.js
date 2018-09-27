// @flow
import * as React from "react";
import logo from "./logo.svg";
import "./App.css";

export type Props = {
  message?: string,
  name: string,
  age: number
};

export const App = (props: Props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      {props.message} {props.name} {props.age}
    </p>
  </div>
);
