/*********************************************************************
 **********************************************************************
 ************************ DA TESTARE SU MOBILE ***********************
 *********************************************************************
 *********************************************************************/

import styled, { css } from "styled-components";
import { FillSize } from "../../index";
import { Theme } from "../Theme/Theme";
import IBackgroundLayersComponent from "./IBackgroundLayersComponent";

const Wrapper = styled.div`
  ${FillSize}
  position: relative;
  overflow: hidden;
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
      props.layerState === layerName ? "100vw" : sizeY + "px"}
    solid
    ${(props) => (props.layerState === layerName ? bgColor : "transparent")};
  border-right: ${(props) =>
      props.layerState === layerName ? "100vw" : sizeX + "px"}
    solid ${bgColor};
  border-bottom: ${(props) =>
      props.layerState === layerName ? "100vw" : sizeY + "px"}
    solid
    ${(props) => (props.layerState === layerName ? bgColor : "transparent")};
  transform: translateY(50%);
  transition: border-right 350ms linear, border-bottom 200ms 250ms linear,
    border-top 250ms 250ms linear;
`;

const BackgroundLayer = styled.div<{
  name: string;
  zIndex: number;
  layerState: string;
  size: number;
}>`
  ${(props) =>
    props.name === "FINE"
      ? DefaultLayersSettigns(5, 150 * 1.5, 150 * 1.1, "FINE", Theme.color.bg)
      : props.name === "PASSWORD"
      ? DefaultLayersSettigns(
          4,
          225 * 1.5,
          225 * 1.1,
          "PASSWORD",
          Theme.color.darkBlue
        )
      : props.name === "PHONE"
      ? DefaultLayersSettigns(
          3,
          300 * 1.5,
          300 * 1.1,
          "PHONE",
          Theme.color.blue
        )
      : props.name === "EMAIL"
      ? DefaultLayersSettigns(
          2,
          375 * 1.5,
          375 * 1.1,
          "EMAIL",
          Theme.color.orange
        )
      : props.name === "START" &&
        DefaultLayersSettigns(
          1,
          450 * 1.5,
          450 * 1.1,
          "START",
          Theme.color.yellow
        )}
`;

export const BackgroundLayersComponent: React.FC<IBackgroundLayersComponent> =
  ({ layerState }) => {
    const size = 150;

    const BackgroundLayersSettings = [
      {
        name: "Fine",
        zIndex: 15,
        layerState: "FINE",
        size: size,
      },
      {
        name: "Email",
        zIndex: 14,
        layerState: "PASSWORD",
        size: size * 1.5,
      },
      {
        name: "Phone",
        zIndex: 13,
        layerState: "PHONE",
        size: size * 2,
      },
      {
        name: "Password",
        zIndex: 12,
        layerState: "EMAIL",
        size: size * 2.5,
      },
      {
        name: "Start",
        zIndex: 11,
        layerState: "START",
        size: size * 3,
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
