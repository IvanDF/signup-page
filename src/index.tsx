import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./packages/GlobalStyles/GlobalStyles";
import { Theme, TyphographyComponent, ButtonComponent } from "./packages/ui";
import { InputComponent } from "./packages/ui/components/InputComponent/InputComponent";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <InputComponent></InputComponent>
  </React.StrictMode>,
  document.getElementById("root")
);
