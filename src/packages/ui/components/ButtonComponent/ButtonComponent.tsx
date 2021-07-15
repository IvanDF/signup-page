import React from "react";
import styled from "styled-components";
import { useViewport } from "../../../hooks";
import { Rgba } from "../Rgba/Rgba";
import { Theme } from "../Theme/Theme";
import IButtonComponent from "./IButtonComponent";

const ButtonLayer = styled.div<{
  bgColorLayer: string;
  isBtnDisabled: boolean;
}>`
  position: relative;
  opacity: ${(props) => (props.isBtnDisabled ? "0.25" : "1")};
  height: 100%;
  width: 100%;
  background-color: ${({ bgColorLayer }) => bgColorLayer};
  padding: 20px 25px;
  border-radius: 8px;
  top: 0;
  right: 0;
  transition: top 250ms ease-in-out, right 250ms ease-in-out;
  cursor: ${(props) => (props.isBtnDisabled ? "not-allowed" : "pointer")}; ;
`;

const Button = styled.button<{
  isUpper?: boolean;
  textColor: string;
  bgColor: string;
  deviceType: string;
}>`
  ${({ isUpper }) => isUpper && "text-transform: uppercase"};
  color: ${({ textColor }) => textColor};
  background-color: ${(props) =>
    props.disabled ? Rgba(props.bgColor, Theme.opacity.o5) : props.bgColor};
  border-radius: 5px;
  font-size: ${(props) =>
    props.deviceType === "mobile" ? Theme.font.s16 : Theme.font.s24};
  z-index: 1;
  border: none;
  outline: none;
  cursor: pointer;
  ${(props) =>
    !props.disabled &&
    `
  &:hover ${ButtonLayer} {
    top: -13px;
    right: -12px;
  }
  `}
`;

export const ButtonComponent: React.FC<IButtonComponent> = ({
  label,
  isUpper,
  disabled = false,
  textColor,
  bgColor,
  bgColorLayer,
  onClick,
}) => {
  const device = useViewport();
  return (
    <>
      <Button
        disabled={disabled}
        onClick={onClick}
        isUpper={isUpper}
        textColor={textColor}
        bgColor={bgColor}
        deviceType={device.device}
      >
        <ButtonLayer bgColorLayer={bgColorLayer} isBtnDisabled={disabled}>
          {label}
        </ButtonLayer>
      </Button>
    </>
  );
};
