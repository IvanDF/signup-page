import styled from "styled-components";
import { useViewport } from "../hooks";
import {
  ButtonComponent,
  DFlex,
  InputComponent,
  Theme,
  TyphographyComponent,
} from "../ui";

const SignupFlows = styled.div<{ deviceType: string }>`
  position: relative;
  ${DFlex("SPACE-BETWEEN")}
  flex-direction: column;
  align-items: flex-start;
  height: ${({ deviceType }) => (deviceType === "mobile" ? "60%" : "100%")};
  width: ${({ deviceType }) => (deviceType !== "mobile" ? "60%" : "100%")};
  padding: 5% 2%;
  > h3 {
    max-width: 750px;
  }
`;

const Signup: React.FC = () => {
  const device = useViewport();
  return (
    <SignupFlows deviceType={device.device}>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.yellow}>
        Registrati per poter accedere alla tua area personale
      </TyphographyComponent>
      <InputComponent
        label="Usename"
        color={Theme.color.yellow}
        value=""
        placeholder="Inserisci il tuo username"
        onChange={(e) => console.log(e)}
      />
      <ButtonComponent
        label="Registrati ora"
        isUpper
        bgColor={Theme.color.darkBlue}
        bgColorLayer={Theme.color.blue}
        textColor={Theme.color.yellow}
      />
    </SignupFlows>
  );
};

export default Signup;
