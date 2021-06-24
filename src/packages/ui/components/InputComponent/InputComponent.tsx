import React from "react";
import { useState } from "react";
import styled from "styled-components";
import {
  DFlex,
  Position,
  ResetInput,
} from "../../../GlobalStyles/GlobalStyles";
import { Theme } from "../Theme/Theme";
import IInputComponent from "./IInputComponent";

const Wrapper = styled.div``;

const InputWrapper = styled.div<{ lineColor: string }>`
  position: relative;
  width: 400px;
  ${DFlex()};
  background: #fff;
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

const Label = styled.label<{ isFocused: boolean }>`
  ${Position("AB", "Y")}
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

const Input = styled.input<{ caretColor: string }>`
  width: 100%;
  ${ResetInput}
  caret-color: ${(props) => props.caretColor};
`;

const ErrorWrapper = styled.div`
  position: relative;
  display: flex;
  left: 120px;
  bottom: 10px;
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
  value,
  error,
  onChange,
  caretColor,
  linesColor,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Wrapper>
      {error && (
        <ErrorWrapper>
          <ErrorMessge>{error}</ErrorMessge>
          <svg
            viewBox="0 0 682 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3.00003L194.15 3.00004L210.65 28.9999L227.15 3.00004L679 3.00004"
              stroke="#C85A5A"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ErrorWrapper>
      )}
      <InputWrapper lineColor={linesColor}>
        <Label isFocused={isFocused}>Label</Label>
        <Input
          caretColor={caretColor}
          value={value}
          onFocus={() => setIsFocused(!isFocused)}
          onBlur={() => setIsFocused(!isFocused)}
          type={type}
          onChange={onChange}
        />
      </InputWrapper>
    </Wrapper>
  );
};
