import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import styled from "styled-components";
import { App } from "./App";
import { ViewportProvider } from "./packages/hooks";
import store from "./packages/state/store";
import { FillSize } from "./packages/ui";

const Wrapper = styled.div`
  ${FillSize}
`;

ReactDOM.render(
  <Wrapper>
    <Provider store={store}>
      <ViewportProvider>
        <App />
      </ViewportProvider>
    </Provider>
  </Wrapper>,
  document.getElementById("root")
);
