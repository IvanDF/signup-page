import { useInputValidator, useSignupFlowState } from "../../../hooks";
import {
  TyphographyComponent,
  Theme,
  InputComponent,
  ButtonComponent,
} from "../../../ui";
import { SignupFlowWrapper } from "../../Signup";

export const Phone: React.FC<{ fullwidth: boolean }> = ({ fullwidth }) => {
  const { nextStep } = useSignupFlowState("PASSWORD");

  const pattern =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  const { inputText, setInputText, isValid } = useInputValidator(pattern);

  return (
    <SignupFlowWrapper fullwidth={fullwidth}>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.yellow}>
        Abbiamo quasi finito! <br /> Inserisci il numero di telefono
      </TyphographyComponent>
      <InputComponent
        onEnter={(e) => e.key === "Enter" && inputText !== "" && nextStep()}
        label="Cellulare"
        type="tel"
        color={Theme.color.yellow}
        value={inputText}
        error={inputText !== "" && !isValid}
        errorMessage="Inserire un numeri di cellulare valido"
        placeholder="Inserisci numero cellulare"
        onChange={(e) => setInputText(e.target.value)}
      />
      <ButtonComponent
        disabled={!isValid}
        onClick={() => nextStep()}
        label="Continua"
        isUpper
        bgColor={Theme.color.orange}
        bgColorLayer={Theme.color.yellow}
        textColor={Theme.color.blue}
      />
    </SignupFlowWrapper>
  );
};
