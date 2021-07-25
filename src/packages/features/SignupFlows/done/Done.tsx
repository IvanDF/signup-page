import { TyphographyComponent, Theme } from "../../../ui";
import { SignupFlowWrapper } from "../../Signup";

export const Done: React.FC<{ fullwidth: boolean }> = ({ fullwidth }) => {
  return (
    <SignupFlowWrapper fullwidth={fullwidth}>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.yellow}>
        Utente creato con successo
      </TyphographyComponent>
      <svg
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M142.875 21.0464C140.712 18.8793 137.202 18.8756 135.038 21.0372L68.5485 87.3517L44.5592 61.2969C42.4863 59.0468 38.9816 58.9008 36.7278 60.9734C34.4757 63.0463 34.3315 66.5527 36.4044 68.8048L64.3011 99.1013C65.3228 100.212 66.7525 100.857 68.2602 100.888C68.3007 100.89 68.3397 100.89 68.3785 100.89C69.8436 100.89 71.253 100.308 72.2913 99.2731L142.864 28.885C145.033 26.7236 145.037 23.2135 142.875 21.0464Z"
          fill={Theme.color.yellow}
        />
        <path
          d="M141.538 68.9286C138.477 68.9286 135.995 71.4096 135.995 74.4711C135.995 108.904 107.984 136.915 73.5514 136.915C39.1203 136.915 11.1072 108.904 11.1072 74.4711C11.1072 40.04 39.1203 12.027 73.5514 12.027C76.6126 12.027 79.0939 9.54594 79.0939 6.48473C79.0939 3.42323 76.6126 0.9422 73.5514 0.9422C33.0071 0.9422 0.0224609 33.9268 0.0224609 74.4711C0.0224609 115.014 33.0071 148 73.5514 148C114.094 148 147.08 115.014 147.08 74.4711C147.08 71.4099 144.599 68.9286 141.538 68.9286Z"
          fill={Theme.color.blue}
        />
      </svg>
    </SignupFlowWrapper>
  );
};
