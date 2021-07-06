import { useState } from "react";
import {
  TyphographyComponent,
  Theme,
  InputComponent,
  ButtonComponent,
} from "../../../ui";

export const Phone = () => {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.yellow}>
        Abbiamo quasi finito! <br /> Inserisci il numero di telefono
      </TyphographyComponent>
      <InputComponent
        label="Cellulare"
        color={Theme.color.yellow}
        value={inputText}
        placeholder="Inserisci numero cellulare"
        onChange={(e) => setInputText(e.target.value)}
      />
      <ButtonComponent
        onClick={() => console.log("e")}
        label="Continua"
        isUpper
        bgColor={Theme.color.orange}
        bgColorLayer={Theme.color.yellow}
        textColor={Theme.color.blue}
      />
    </>
  );
};
