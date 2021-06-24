import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./packages/GlobalStyles/GlobalStyles";
import { TestCompoente } from "./TestComponenti";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <TestCompoente />
  </React.StrictMode>,
  document.getElementById("root")
);
