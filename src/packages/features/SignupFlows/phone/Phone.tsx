import { useState } from "react";
import { useSignupFlowState } from "../../../hooks";
import {
  TyphographyComponent,
  Theme,
  InputComponent,
  ButtonComponent,
} from "../../../ui";
import { InputWrapper } from "../../Signup";

export const Phone = () => {
  const { nextStep } = useSignupFlowState("PASSWORD");
  const [inputText, setInputText] = useState("");
  return (
    <>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.yellow}>
        Abbiamo quasi finito! <br /> Inserisci il numero di telefono
      </TyphographyComponent>
      <InputWrapper>
        <InputComponent
          onEnter={(e) => e.key === "Enter" && nextStep()}
          label="Cellulare"
          type="tel"
          color={Theme.color.yellow}
          value={inputText}
          placeholder="Inserisci numero cellulare"
          onChange={(e) => setInputText(e.target.value)}
        />
      </InputWrapper>
      {inputText !== "" && (
        <ButtonComponent
          onClick={() => nextStep()}
          label="Continua"
          isUpper
          bgColor={Theme.color.orange}
          bgColorLayer={Theme.color.yellow}
          textColor={Theme.color.blue}
        />
      )}
    </>
  );
};
