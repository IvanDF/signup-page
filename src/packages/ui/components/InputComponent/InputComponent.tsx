import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useViewport } from "../../../hooks";
import { DFlex, Position, ResetInput } from "../../index";
import { Rgba } from "../Rgba/Rgba";
import { Theme } from "../Theme/Theme";
import IInputComponent from "./IInputComponent";

const Wrapper = styled.div`
  position: relative;
`;

const InputWrapper = styled.div<{ lineColor: string; deviceType: string }>`
  position: relative;
  width: ${({ deviceType }) => (deviceType !== "mobile" ? "400px" : "280px")};
  ${DFlex()};
  padding: 20px 20px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    height: 3px;
    border-radius: 5px;
    width: ${(props) => (props.deviceType === "mobile" ? "100px" : "200px")};
    background: ${(props) => props.lineColor};
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 9px;
    height: 3px;
    border-radius: 5px;
    width: 100%;
    max-width: 100%;
    background: ${(props) => props.lineColor};
  }
`;

const Label = styled.label<{
  isFocused: boolean;
  lableColor: string;
  deviceType: string;
}>`
  font-family: "spartan", sans-serif;
  font-size: ${(props) =>
    props.deviceType === "mobile" ? Theme.font.s16 : Theme.font.s24};

  ${Position("AB", "Y")}
  color: ${(props) => props.lableColor};
  left: 20px;
  cursor: pointer;
  ${(props) =>
    props.isFocused
      ? `${Position("AB")}; top: 3px; left: ${
          props.deviceType === "mobile" ? "115px" : "215px"
        }; transition: top 250ms 250ms ease, left 250ms ease;`
      : `${Position(
          "AB",
          "Y"
        )}; transition: top 250ms 200ms ease, left 300ms 300ms ease;`}
`;

const Input = styled.input<{
  caretColor: string;
  inputTextColor: string;
  isFocused: boolean;
  deviceType: string;
}>`
  ${ResetInput}
  font-family: "spartan", sans-serif;
  font-size: ${(props) =>
    props.deviceType === "mobile" ? Theme.font.s16 : Theme.font.s24};
  color: ${(props) => props.inputTextColor};
  caret-color: ${(props) => props.caretColor};
  &::placeholder {
    font-family: "spartan", sans-serif;
    font-size: ${(props) =>
      props.deviceType === "mobile" ? Theme.font.s16 : Theme.font.s24};
    color: ${(props) => Rgba(props.inputTextColor, Theme.opacity.o5)};
    max-width: ${(props) => (props.isFocused ? "100%" : "0")};
    overflow: hidden;
    transition: ${(props) =>
      props.isFocused
        ? "max-width 300ms 60ms linear"
        : "max-width 300ms 100ms linear"};
  }
`;

const ErrorWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 115px;
  bottom: 70px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  max-width: 100%;
`;

const ErrorMessge = styled.div`
  padding: 10px 20px;
  width: 100%;
  color: ${Theme.color.warning};
`;

export const InputComponent: React.FC<IInputComponent> = ({
  type = "text",
  label,
  value,
  placeholder,
  error,
  errorMessage,
  onChange,
  onEnter,
  color,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const device = useViewport();

  return (
    <Wrapper>
      {error && (
        <ErrorWrapper>
          <ErrorMessge>{errorMessage}</ErrorMessge>
          <svg
            viewBox="0 0 682 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3.00003L194.15 3.00004L210.65 28.9999L227.15 3.00004L679 3.00004"
              stroke="#C85A5A"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ErrorWrapper>
      )}
      <InputWrapper deviceType={device.device} lineColor={color}>
        <Label
          htmlFor="inputText"
          lableColor={color}
          isFocused={isFocused}
          deviceType={device.device}
        >
          {label}
        </Label>
        <Input
          name="inputText"
          id="inputText"
          isFocused={isFocused}
          placeholder={placeholder}
          inputTextColor={color}
          caretColor={color}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => value.length === 0 && setIsFocused(false)}
          type={type}
          autoFocus
          onChange={onChange}
          onKeyDown={onEnter}
          deviceType={device.device}
        />
      </InputWrapper>
    </Wrapper>
  );
};
