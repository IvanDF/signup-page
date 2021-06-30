import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { DFlex, Position, ResetInput } from "../../index";
import { Rgba } from "../Rgba/Rgba";
import { Theme } from "../Theme/Theme";
import IInputComponent from "./IInputComponent";

const Wrapper = styled.div`
  position: relative;
`;

const InputWrapper = styled.div<{ lineColor: string }>`
  position: relative;
  width: 400px;
  ${DFlex()};
  padding: 20px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    height: 5px;
    width: 200px;
    background: ${(props) => props.lineColor};
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 9px;
    height: 5px;
    width: 100%;
    max-width: 100%;
    background: ${(props) => props.lineColor};
  }
`;

const Label = styled.label<{ isFocused: boolean; lableColor: string }>`
  ${Position("AB", "Y")}
  color: ${(props) => props.lableColor};
  left: 20px;
  ${(props) =>
    props.isFocused
      ? `${Position(
          "AB"
        )}; top: 10px; left: 210px; transition: top 250ms 300ms ease, left 300ms ease;`
      : `${Position(
          "AB",
          "Y"
        )}; transition: top 250ms ease, left 300ms 250ms ease;`}
`;

const Input = styled.input<{
  caretColor: string;
  inputTextColor: string;
  isFocused: boolean;
}>`
  ${ResetInput}
  /* width: 100%; */
  color: ${(props) => props.inputTextColor};
  caret-color: ${(props) => props.caretColor};
  &::placeholder {
    color: ${(props) => Rgba(props.inputTextColor, Theme.opacity.o5)};
    max-width: ${(props) => (props.isFocused ? "100%" : "0")};
    overflow: hidden;
    transition: ${(props) =>
      props.isFocused
        ? "max-width 250ms 60ms linear"
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
  color,
}) => {
  const [isFocused, setIsFocused] = useState(false);

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
      <InputWrapper lineColor={color}>
        <Label lableColor={color} isFocused={isFocused}>
          {label}
        </Label>
        <Input
          isFocused={isFocused}
          placeholder={placeholder}
          inputTextColor={color}
          caretColor={color}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => value.length === 0 && setIsFocused(false)}
          type={type}
          onChange={onChange}
        />
      </InputWrapper>
    </Wrapper>
  );
};
