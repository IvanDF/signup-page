import styled from "styled-components";
import Signup from "./packages/features/Signup";
import { BackgroundLayersComponent, FillSize } from "./packages/ui";

const Wrapper = styled.div`
  ${FillSize}
`;

export const App = () => {
  return (
    <Wrapper>
      <Signup />
      <BackgroundLayersComponent layerState={"INIT"} />
    </Wrapper>
  );
};
