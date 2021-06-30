import ReactDOM from "react-dom";
import styled from "styled-components";
import { App } from "./App";
import {
  BackgroundLayersComponent,
  FillSize,
  GlobalStyle,
} from "./packages/ui";

const Wrapper = styled.div`
  ${FillSize}
`;

ReactDOM.render(
  <Wrapper>
    <GlobalStyle />
    <App />
  </Wrapper>,
  document.getElementById("root")
);
