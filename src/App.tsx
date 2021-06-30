import { useState } from "react";
import styled from "styled-components";
import { BackgroundLayersComponent } from "./packages/ui";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

/************************
 * TESTING COMPONENT
 ***********************/
const Inpur = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;
/************************
 * TESTING COMPONENT
 ***********************/

export const App = () => {
  const [prova, setPrvoa] = useState("");
  return (
    <Wrapper>
      <Inpur
        /************************
         * TESTING COMPONENT
         ***********************/
        type="text"
        onChange={(e) => {
          setPrvoa(e.target.value.toUpperCase());
          console.log(e.target.value);
        }}
      />
      <BackgroundLayersComponent layerState={prova} />
    </Wrapper>
  );
};
