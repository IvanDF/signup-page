import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signupState, setState } from "../../state/signupSlice";

export const useSignupFlowState = (stateValue: string) => {
  const signupStateSelector = useSelector(signupState);
  const history = useHistory();
  const dispatch = useDispatch();

  const nextStep = () => {
    dispatch(setState({ value: stateValue }));
    setTimeout(() => {
      history.push(`${stateValue.toLocaleLowerCase()}`);
    }, 350);
  };

  return { signupStateSelector, nextStep };
};
