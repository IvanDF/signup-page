import { useHistory } from "react-router-dom";
import { TyphographyComponent, Theme, ButtonComponent } from "../../../ui";

export const Welcome = () => {
  const history = useHistory();
  return (
    <>
      <TyphographyComponent textType={"HEADING"} color={Theme.color.yellow}>
        Registrati per poter accedere alla tua area personale
      </TyphographyComponent>
      <ButtonComponent
        onClick={() => history.push("/username")}
        label="Registrati ora"
        isUpper
        bgColor={Theme.color.darkBlue}
        bgColorLayer={Theme.color.blue}
        textColor={Theme.color.yellow}
      />
    </>
  );
};
