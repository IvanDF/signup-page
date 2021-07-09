import { createGlobalStyle, css } from "styled-components";
import { Theme } from "../../index";

export const FillSize = () => css`
  width: 100%;
  height: 100%;
`;

export const GlobalStyle = createGlobalStyle<{ layerState: string }>`
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
    #root {
      ${FillSize}
    }
    *::selection
    {
       ${(layerState) =>
         layerState === "PASSWORD"
           ? `
       background: ${Theme.color.orange};
       color: ${Theme.color.darkBlue};
       `
           : (layerState) =>
               layerState === "PHONE"
                 ? `
       background: ${Theme.color.yellow};
       color: ${Theme.color.blue};
       `
                 : (layerState) =>
                     layerState === "EMAIL"
                       ? `
       background: ${Theme.color.darkBlue};
       color: ${Theme.color.orange};
       `
                       : (layerState) =>
                           layerState === "START"
                             ? `
       background: ${Theme.color.blue};
       color: ${Theme.color.warning};
       `
                             : `
           background: ${Theme.color.yellow};
       color: ${Theme.color.bg};
       `} 
      }
  }`;

export const DFlex = (type?: string) => css`
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

export const Position = (posType: string, posAxis?: string) => css`
  position: ${posType === "AB"
    ? "absolute"
    : posType === "RL"
    ? "position: relative"
    : posType === "FX" && "position: fixed"};

  ${posAxis === "XY"
    ? `
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      `
    : posAxis === "X"
    ? `
      left: 50%;
      transform: translateX(-50%);
      `
    : posAxis === "Y" &&
      `
      top: 50%;
      transform: translateY(-50%);
      `}
`;

export const ResetInput = () => css`
  background: none;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
`;
