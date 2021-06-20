import styled, { createGlobalStyle, css } from "styled-components";
import { Theme } from "../ui";

export const GlobalStyle = createGlobalStyle`
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
  }`;

export const DFlex = (type: string) => css`
  display: flex;
  ${type === "CENTER"
    ? `
    justify-content: center;
    align-items: center;`
    : type === "LEFT"
    ? `
    justify-content: center;
    align-items: center;`
    : type === "RIGHT"
    ? `
    justify-content: flex-end;
    align-items: center;`
    : type === "SPACE-BETWEEN" &&
      `
    justify-content: space-between;
    align-items: center;`}
`;
