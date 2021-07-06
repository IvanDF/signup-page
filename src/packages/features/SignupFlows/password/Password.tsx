import { useState } from "react";
import {
  TyphographyComponent,
  Theme,
  InputComponent,
  ButtonComponent,
} from "../../../ui";

export const Password = () => {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.orange}>
        Infine rendiamo sicuro l’account, mi raccomando una password complessa!
      </TyphographyComponent>
      <InputComponent
        label="Password"
        color={Theme.color.orange}
        value={inputText}
        placeholder="Inserisci una password"
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
