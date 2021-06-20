import React from "react";
import styled from "styled-components";
import { DFlex } from "../../../GlobalStyles/GlobalStyles";
import IInputComponent from "./IInputComponent";

const InputWrapper = styled.div`
  ${DFlex("CENTER")}
  height: 100px;
  width: 400px;
  background: #fff;
`;

export const InputComponent: React.FC<IInputComponent> = () => {
  return <InputWrapper></InputWrapper>;
};
