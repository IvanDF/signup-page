import { useSignupFlowState } from "../../../hooks";
import { TyphographyComponent, Theme, ButtonComponent } from "../../../ui";
import { InputWrapper } from "../../Signup";

export const Welcome = () => {
  const { nextStep } = useSignupFlowState("USERNAME");

  return (
    <>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.yellow}>
        Registrati per poter accedere alla tua area personale
      </TyphographyComponent>
      <InputWrapper>
        <ButtonComponent
          onClick={() => nextStep()}
          label="Registrati ora"
          isUpper
          bgColor={Theme.color.darkBlue}
          bgColorLayer={Theme.color.blue}
          textColor={Theme.color.yellow}
        />
      </InputWrapper>
    </>
  );
};
