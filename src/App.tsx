import { useSelector } from "react-redux";
import styled from "styled-components";
import Signup from "./packages/features/Signup";
import { signupState } from "./packages/state/signupSlice";
import {
  BackgroundLayersComponent,
  FillSize,
  GlobalStyle,
} from "./packages/ui";

const Wrapper = styled.div`
  ${FillSize};
`;

export const App = () => {
  const signupStateSelector = useSelector(signupState);

  window.addEventListener("resize", () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  return (
    <Wrapper>
      <Signup />
      <GlobalStyle />
      <BackgroundLayersComponent layerState={signupStateSelector} />
    </Wrapper>
  );
};
