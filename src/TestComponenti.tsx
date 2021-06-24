import React, { useEffect } from "react";
import { useState } from "react";
import { InputComponent } from "./packages/ui/components/InputComponent/InputComponent";

export const TestCompoente: React.FC = () => {
  const [prova, setProva] = useState("");

  useEffect(() => {
    console.log(prova);
  }, [prova]);

  return (
    <>
      <InputComponent
        error="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque odit facilis omnis ad saepe nisi dolore nesciunt sapiente, molestias et labore vitae laborum officia ea. Modi, doloribus. Doloribus, dicta."
        linesColor="red"
        caretColor="red"
        value={prova}
        onChange={(e) => {
          setProva(e.target.value);
        }}
      />
    </>
  );
};
