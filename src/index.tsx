import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { Theme, TyphographyComponent } from "./packages/ui";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    // RESET STYLES
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // SETTING GLOBAL FONT
    font-family: 'Josefin Sans', serif;
    font-size: ${Theme.font.s18};
    font-weight: ${Theme.font.w400};
  }
  body {
    width: 100%;
    height: 100vh;
    background: ${Theme.color.bg};
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <TyphographyComponent
      color={Theme.color.yellow}
      textType="HEADING"
      fontWeight={Theme.font.w400}
      text="Infine rendiamo sicuro l’account, mi raccomando una password complessa!"
    ></TyphographyComponent>
  </React.StrictMode>,
  document.getElementById("root")
);
