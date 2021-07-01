import ReactDOM from "react-dom";
import styled from "styled-components";
import { App } from "./App";
import { ViewportProvider } from "./packages/hooks";
import { FillSize, GlobalStyle } from "./packages/ui";

const Wrapper = styled.div`
  ${FillSize}
`;

ReactDOM.render(
  <Wrapper>
    <ViewportProvider>
      <GlobalStyle />
      <App />
    </ViewportProvider>
  </Wrapper>,
  document.getElementById("root")
);
