import { useState } from "react";
import { useSignupFlowState } from "../../../hooks";
import {
  TyphographyComponent,
  Theme,
  InputComponent,
  ButtonComponent,
} from "../../../ui";
import { InputWrapper } from "../../Signup";

export const Password = () => {
  const { nextStep } = useSignupFlowState("DONE");
  const [inputText, setInputText] = useState("");
  return (
    <>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.orange}>
        Infine rendiamo sicuro l’account, mi raccomando una password complessa!
      </TyphographyComponent>
      <InputWrapper>
        <InputComponent
          onEnter={(e) => e.key === "Enter" && nextStep()}
          label="Password"
          type="password"
          color={Theme.color.orange}
          value={inputText}
          placeholder="Inserisci una password"
          onChange={(e) => setInputText(e.target.value)}
        />
      </InputWrapper>
      {inputText !== "" && (
        <ButtonComponent
          onClick={() => nextStep()}
          label="Registrati ora"
          isUpper
          bgColor={Theme.color.darkBlue}
          bgColorLayer={Theme.color.blue}
          textColor={Theme.color.yellow}
        />
      )}
    </>
  );
};
