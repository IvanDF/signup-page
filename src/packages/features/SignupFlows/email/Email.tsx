import { useState } from "react";
import {
  TyphographyComponent,
  Theme,
  InputComponent,
  ButtonComponent,
} from "../../../ui";

export const Email = () => {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.darkBlue}>
        Ora inserisci il tuo indirizzo mail
      </TyphographyComponent>
      <InputComponent
        label="E-mail"
        color={Theme.color.darkBlue}
        value={inputText}
        placeholder="Inserisci indirizzo e-mail"
        onChange={(e) => setInputText(e.target.value)}
      />
      <ButtonComponent
        onClick={() => console.log("e")}
        label="Invia E-mail"
        isUpper
        bgColor={Theme.color.darkBlue}
        bgColorLayer={Theme.color.blue}
        textColor={Theme.color.yellow}
      />
    </>
  );
};
