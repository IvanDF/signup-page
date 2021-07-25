import { useInputValidator, useSignupFlowState } from "../../../hooks";
import {
  TyphographyComponent,
  Theme,
  InputComponent,
  ButtonComponent,
} from "../../../ui";
import { SignupFlowWrapper } from "../../Signup";

export const Email: React.FC<{ fullwidth: boolean }> = ({ fullwidth }) => {
  const { nextStep } = useSignupFlowState("PHONE");
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { inputText, setInputText, isValid } = useInputValidator(pattern);

  return (
    <SignupFlowWrapper fullwidth={fullwidth}>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.darkBlue}>
        Ora inserisci il tuo indirizzo mail
      </TyphographyComponent>
      <InputComponent
        onEnter={(e) => e.key === "Enter" && inputText !== "" && nextStep()}
        label="E-mail"
        type="email"
        color={Theme.color.darkBlue}
        value={inputText}
        error={inputText !== "" && !isValid}
        errorMessage="Inserire un indirizzo e-mail valido"
        placeholder="Inserisci indirizzo e-mail"
        onChange={(e) => setInputText(e.target.value)}
      />
      <ButtonComponent
        disabled={!isValid}
        onClick={() => nextStep()}
        label="Invia E-mail"
        isUpper
        bgColor={Theme.color.darkBlue}
        bgColorLayer={Theme.color.blue}
        textColor={Theme.color.yellow}
      />
    </SignupFlowWrapper>
  );
};
