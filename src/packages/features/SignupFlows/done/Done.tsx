import { TyphographyComponent, Theme } from "../../../ui";

export const Done = () => {
  return (
    <>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.yellow}>
        Utente creato con successo
      </TyphographyComponent>
    </>
  );
};