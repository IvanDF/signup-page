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
  return (
    <Wrapper>
      <Signup />
      <GlobalStyle layerState={signupStateSelector} />
      <BackgroundLayersComponent layerState={signupStateSelector} />
    </Wrapper>
  );
};
