// @flow
import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import type { Props } from "./App";
import registerServiceWorker from "./registerServiceWorker";

const butter: Props = {
  message: "hello",
  name: "dave",
  age: 4
};

ReactDOM.render(<App {...butter} />, document.getElementById("root"));
registerServiceWorker();
