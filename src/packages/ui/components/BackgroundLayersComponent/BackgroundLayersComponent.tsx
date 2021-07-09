import { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { useViewport } from "../../../hooks";
import { FillSize } from "../../index";
import { Theme } from "../Theme/Theme";
import IBackgroundLayersComponent from "./IBackgroundLayersComponent";

const Wrapper = styled.div`
  ${FillSize}
  position: absolute;
  overflow: hidden;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const DefaultLayersSettigns = (
  zIndex: number,
  sizeY: number,
  sizeX: number,
  layerName: string,
  bgColor: string
) => css<{ layerState: string; size: number }>`
  position: absolute;
  z-index: ${zIndex};
  bottom: 30%;
  right: 0;
  width: 0;
  height: 0;
  border-top: ${(props) =>
      props.layerState === layerName ? "100vh" : sizeY + "px"}
    solid
    ${(props) => (props.layerState === layerName ? bgColor : "transparent")};
  border-right: ${(props) =>
      props.layerState === layerName ? "100vw" : sizeX + "px"}
    solid ${bgColor};
  border-bottom: ${(props) =>
      props.layerState === layerName ? "100vh" : sizeY + "px"}
    solid
    ${(props) => (props.layerState === layerName ? bgColor : "transparent")};
  transform: translateY(50%);
  transition: ${(props) =>
    props.layerState !== layerName
      ? `all 200ms 1s linear`
      : `border-right 350ms linear, border-bottom 200ms 250ms linear,
    border-top 250ms 250ms linear`};
`;

const BackgroundLayer = styled.div<{
  name: string;
  zIndex: number;
  layerState: string;
  size: number;
}>`
  ${(props) =>
    props.name === "DONE"
      ? DefaultLayersSettigns(
          props.zIndex,
          props.size * 1.5,
          props.size * 1.1,
          props.name,
          Theme.color.bg
        )
      : props.name === "PASSWORD"
      ? DefaultLayersSettigns(
          props.zIndex,
          props.size * 1.5,
          props.size * 1.1,
          props.name,
          Theme.color.darkBlue
        )
      : props.name === "PHONE"
      ? DefaultLayersSettigns(
          props.zIndex,
          props.size * 1.5,
          props.size * 1.1,
          props.name,
          Theme.color.blue
        )
      : props.name === "EMAIL"
      ? DefaultLayersSettigns(
          props.zIndex,
          props.size * 1.5,
          props.size * 1.1,
          props.name,
          Theme.color.orange
        )
      : props.name === "USERNAME" &&
        DefaultLayersSettigns(
          props.zIndex,
          props.size * 1.5,
          props.size * 1.1,
          props.name,
          Theme.color.yellow
        )}
`;

export const BackgroundLayersComponent: React.FC<IBackgroundLayersComponent> =
  ({ layerState }) => {
    const deviceType = useViewport();

    const [shapesSize, setShapesSize] = useState(0);

    useEffect(() => {
      deviceType.device === "mobile" ? setShapesSize(80) : setShapesSize(150);
    }, [deviceType.device]);

    const BackgroundLayersSettings = [
      {
        name: "Done",
        zIndex: 15,
        size: shapesSize,
      },
      {
        name: "Password",
        zIndex: 14,
        size: shapesSize * 1.5,
      },
      {
        name: "Phone",
        zIndex: 13,
        size: shapesSize * 2,
      },
      {
        name: "Email",
        zIndex: 12,
        size: shapesSize * 2.5,
      },
      {
        name: "Username",
        zIndex: 11,
        size: shapesSize * 3,
      },
    ];

    return (
      <Wrapper>
        {BackgroundLayersSettings.map((e, i) => {
          return (
            <BackgroundLayer
              key={i}
              name={e.name.toUpperCase()}
              zIndex={e.zIndex}
              layerState={layerState}
              size={e.size}
            />
          );
        })}
      </Wrapper>
    );
  };
