import React from "react";
import styled from "styled-components";
import { useViewport } from "../../../hooks";
import { Theme } from "../Theme/Theme";
import ITyphographyComponent from "./ITyphographyComponent";

const Paragraph = styled.p<{
  fontSize?: string;
  fontWeight?: string;
  color: string;
  isUpper?: boolean;
  deviceType: string;
}>`
  color: ${({ color }) => color};
  font-size: ${({ deviceType }) =>
    deviceType === "mobile" ? Theme.font.s18 : Theme.font.s24};
  ${({ isUpper }) => isUpper && "text-transform: uppercase"}
`;

const Heading = styled.h3<{
  fontSize?: string;
  fontWeight?: string;
  color: string;
  deviceType: string;
}>`
  font-size: ${({ deviceType }) =>
    deviceType === "mobile" ? Theme.font.s48 : Theme.font.s72};
  color: ${({ color }) => color};
`;

export const TyphographyComponent: React.FC<ITyphographyComponent> = ({
  fontSize,
  fontWeight,
  textType = "BODY",
  color,
  isUpper,
  children,
}) => {
  const device = useViewport();
  return (
    <>
      {textType === "HEADING" ? (
        <Heading
          deviceType={device.device}
          color={color}
          fontWeight={fontWeight}
          fontSize={fontSize}
        >
          {children}
        </Heading>
      ) : (
        textType === "BODY" && (
          <Paragraph
            deviceType={device.device}
            isUpper={isUpper}
            color={color}
            fontWeight={fontWeight}
            fontSize={fontSize}
          >
            {children}
          </Paragraph>
        )
      )}
    </>
  );
};
