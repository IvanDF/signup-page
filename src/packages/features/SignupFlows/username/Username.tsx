import React, { useState } from "react";
import { useSignupFlowState } from "../../../hooks";
import {
  TyphographyComponent,
  Theme,
  InputComponent,
  ButtonComponent,
} from "../../../ui";
import { SignupFlowWrapper } from "../../Signup";

export const Username: React.FC<{ fullwidth: boolean }> = ({ fullwidth }) => {
  const { nextStep } = useSignupFlowState("EMAIL");
  const [inputText, setInputText] = useState("");
  return (
    <SignupFlowWrapper fullwidth={fullwidth}>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.blue}>
        Iniziamo! <br /> Chi sei?
      </TyphographyComponent>
      <InputComponent
        onEnter={(e) => e.key === "Enter" && inputText !== "" && nextStep()}
        label="Nome utente"
        color={Theme.color.blue}
        value={inputText}
        placeholder="Inserisci il tuo nome utente"
        onChange={(e) => setInputText(e.target.value)}
      />
      <ButtonComponent
        disabled={inputText === ""}
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
