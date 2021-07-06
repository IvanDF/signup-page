import { useState } from "react";
import {
  TyphographyComponent,
  Theme,
  InputComponent,
  ButtonComponent,
} from "../../../ui";

export const Username = () => {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.blue}>
        Iniziamo! <br /> Chi sei?
      </TyphographyComponent>
      <InputComponent
        label="Nome utente"
        color={Theme.color.blue}
        value={inputText}
        placeholder="Inserisci il tuo nome utente"
        onChange={(e) => setInputText(e.target.value)}
      />
      <ButtonComponent
        onClick={() => console.log("e")}
        label="Registrati ora"
        isUpper
        bgColor={Theme.color.darkBlue}
        bgColorLayer={Theme.color.blue}
        textColor={Theme.color.yellow}
      />
    </>
  );
};
