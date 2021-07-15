import { useState } from "react";
import { useSignupFlowState } from "../../../hooks";
import {
  TyphographyComponent,
  Theme,
  InputComponent,
  ButtonComponent,
} from "../../../ui";

export const Phone = () => {
  const { nextStep } = useSignupFlowState("PASSWORD");
  const [inputText, setInputText] = useState("");
  return (
    <>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.yellow}>
        Abbiamo quasi finito! <br /> Inserisci il numero di telefono
      </TyphographyComponent>
      <InputComponent
        onEnter={(e) => e.key === "Enter" && inputText !== "" && nextStep()}
        label="Cellulare"
        type="tel"
        color={Theme.color.yellow}
        value={inputText}
        placeholder="Inserisci numero cellulare"
        onChange={(e) => setInputText(e.target.value)}
      />
      <ButtonComponent
        disabled={inputText === ""}
        onClick={() => nextStep()}
        label="Continua"
        isUpper
        bgColor={Theme.color.orange}
        bgColorLayer={Theme.color.yellow}
        textColor={Theme.color.blue}
      />
    </>
  );
};
