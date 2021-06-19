import React, { Children } from "react";
import styled from "styled-components";
import { Theme } from "../Theme/Theme";
import ITyphographyComponent from "./ITyphographyComponent";

const Paragraph = styled.p<{
  fontSize?: string;
  fontWeight?: string;
  color: string;
  isUpper?: boolean;
}>`
  color: ${({ color }) => color};
  ${({ fontSize }) => fontSize && `font-size: ${Theme.font.s72}`}
  ${({ isUpper }) => isUpper && "text-transform: uppercase"}
`;

const Heading = styled.h3<{
  fontSize?: string;
  fontWeight?: string;
  color: string;
}>`
  font-size: ${Theme.font.s72};
  color: ${({ color }) => color};
`;

export const TyphographyComponent: React.FC<ITyphographyComponent> = ({
  fontSize,
  fontWeight,
  textType = "BODY",
  color,
  isUpper,
}) => {
  return (
    <>
      {textType === "HEADING" ? (
        <Heading color={color} fontWeight={fontWeight} fontSize={fontSize}>
          {Children}
        </Heading>
      ) : (
        textType === "BODY" && (
          <Paragraph
            isUpper={isUpper}
            color={color}
            fontWeight={fontWeight}
            fontSize={fontSize}
          >
            {Children}
          </Paragraph>
        )
      )}
    </>
  );
};
