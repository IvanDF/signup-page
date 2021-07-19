import { useState } from "react";
import { useInputValidator, useSignupFlowState } from "../../../hooks";
import {
  TyphographyComponent,
  Theme,
  InputComponent,
  ButtonComponent,
} from "../../../ui";

export const Password = () => {
  const { nextStep } = useSignupFlowState("DONE");

  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const { inputText, setInputText, isValid } = useInputValidator(pattern);

  return (
    <>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.orange}>
        Infine rendiamo sicuro l’account, mi raccomando una password complessa!
      </TyphographyComponent>
      <InputComponent
        onEnter={(e) => e.key === "Enter" && inputText !== "" && nextStep()}
        label="Password"
        type="password"
        color={Theme.color.orange}
        value={inputText}
        error={inputText !== "" && !isValid}
        errorMessage="La password non è sicura! Deve contenere almeno una una lettera maiuscola ed un numero ed un carattere speciale"
        placeholder="Inserisci una password"
        onChange={(e) => setInputText(e.target.value)}
      />
      <ButtonComponent
        disabled={!isValid}
        onClick={() => nextStep()}
        label="Registrati ora"
        isUpper
        bgColor={Theme.color.darkBlue}
        bgColorLayer={Theme.color.blue}
        textColor={Theme.color.yellow}
      />
    </>
  );
};
