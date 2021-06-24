import React, { useEffect } from "react";
import { useState } from "react";
import { Theme } from "./packages/ui";
import { InputComponent } from "./packages/ui/components/InputComponent/InputComponent";

export const TestCompoente: React.FC = () => {
  const [prova, setProva] = useState("");

  useEffect(() => {
    console.log(prova);
  }, [prova]);

  return (
    <>
      <InputComponent
        error={true}
        label="Password"
        placeholder="Inserisci Password"
        errorMessage="La password non è sicura! Deve contenere almeno una una lettera maiuscola ed un numero ed un carattere speciale"
        color={Theme.color.blue}
        value={prova}
        onChange={(e) => {
          setProva(e.target.value);
        }}
      />
    </>
  );
};
