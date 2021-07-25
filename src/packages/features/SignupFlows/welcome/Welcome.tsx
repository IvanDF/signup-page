import { useSignupFlowState } from "../../../hooks";
import { TyphographyComponent, Theme, ButtonComponent } from "../../../ui";
import { SignupFlowWrapper } from "../../Signup";

export const Welcome: React.FC<{ fullwidth: boolean }> = ({ fullwidth }) => {
  const { nextStep } = useSignupFlowState("USERNAME");

  return (
    <SignupFlowWrapper fullwidth={fullwidth}>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.yellow}>
        Registrati per poter accedere alla tua area personale
      </TyphographyComponent>
      <ButtonComponent
        onClick={() => nextStep()}
        label="Registrati ora"
        isUpper
        bgColor={Theme.color.darkBlue}
        bgColorLayer={Theme.color.blue}
        textColor={Theme.color.yellow}
      />
    </SignupFlowWrapper>
  );
};
