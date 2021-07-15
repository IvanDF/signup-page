import { useState } from "react";
import { useSignupFlowState } from "../../../hooks";
import {
  TyphographyComponent,
  Theme,
  InputComponent,
  ButtonComponent,
} from "../../../ui";

export const Email = () => {
  const { nextStep } = useSignupFlowState("PHONE");
  const [inputText, setInputText] = useState("");
  return (
    <>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.darkBlue}>
        Ora inserisci il tuo indirizzo mail
      </TyphographyComponent>
      <InputComponent
        onEnter={(e) => e.key === "Enter" && inputText !== "" && nextStep()}
        label="E-mail"
        type="email"
        color={Theme.color.darkBlue}
        value={inputText}
        placeholder="Inserisci indirizzo e-mail"
        onChange={(e) => setInputText(e.target.value)}
      />
      <ButtonComponent
        disabled={inputText === ""}
        onClick={() => nextStep()}
        label="Invia E-mail"
        isUpper
        bgColor={Theme.color.darkBlue}
        bgColorLayer={Theme.color.blue}
        textColor={Theme.color.yellow}
      />
    </>
  );
};
