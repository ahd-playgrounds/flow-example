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
  age: 4,
  dick: "weed"
};

ReactDOM.render(
  <App
    message={butter.message}
    name={butter.name}
    age={butter.age}
    dick={"llob"}
  />,
  document.getElementById("root")
);
registerServiceWorker();
