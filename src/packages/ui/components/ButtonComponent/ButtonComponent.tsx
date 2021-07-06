import React from "react";
import styled from "styled-components";
import { Theme } from "../Theme/Theme";
import IButtonComponent from "./IButtonComponent";

const ButtonLayer = styled.div<{ bgColorLayer: string }>`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: ${({ bgColorLayer }) => bgColorLayer};
  padding: 20px 25px;
  border-radius: 8px;
  top: 0;
  right: 0;
  transition: top 250ms ease-in-out, right 250ms ease-in-out;
  cursor: pointer;
`;

const Button = styled.button<{
  isUpper?: boolean;
  textColor: string;
  bgColor: string;
}>`
  ${({ isUpper }) => isUpper && "text-transform: uppercase"};
  color: ${({ textColor }) => textColor};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 5px;
  font-size: ${Theme.font.s24};
  z-index: 1;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover ${ButtonLayer} {
    top: -13px;
    right: -12px;
  }
`;

export const ButtonComponent: React.FC<IButtonComponent> = ({
  label,
  isUpper,
  textColor,
  bgColor,
  bgColorLayer,
  onClick,
}) => {
  return (
    <>
      <Button
        onClick={onClick}
        isUpper={isUpper}
        textColor={textColor}
        bgColor={bgColor}
      >
        <ButtonLayer bgColorLayer={bgColorLayer}>{label}</ButtonLayer>
      </Button>
    </>
  );
};
