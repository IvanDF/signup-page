import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { Theme, TyphographyComponent, ButtonComponent } from "./packages/ui";

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
    margin: 60px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ButtonComponent
      bgColorLayer={Theme.color.darkBlue}
      bgColor={Theme.color.blue}
      label="Registrati ora"
      isUpper={true}
      textColor={Theme.color.yellow}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
