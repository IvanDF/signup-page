import { useEffect, useState } from "react";

export const useInputValidator = (pattern: any) => {
  const [inputText, setInputText] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    pattern.test(inputText) ? setIsValid(true) : setIsValid(false);
  }, [inputText]);

  return { inputText, setInputText, isValid };
};
